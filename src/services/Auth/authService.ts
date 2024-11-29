import { TokenManager } from '../../middlewares/jwtToken/tokenGenerate'
import { AuthModel, type AuthUserProps } from '../../models/Auth/authModel'
import { Encryption } from '../../utils/encryption/encryptionPassword'

export class AuthService {
  static async create(useAuth: AuthUserProps): Promise<AuthUserProps | string> {
    const { name, email, password } = useAuth
    if (!useAuth) {
      throw new Error('Falha ao Obter Dados do usuários')
    }

    const verifyEmail = await AuthModel.findOne({ email })

    if (verifyEmail) throw new Error('O email já Existe, tente outro.')

    const encryptPass = await Encryption.encryptPassword(password)
    const newUserAuth = {
      name,
      email,
      password: encryptPass,
    }
    const createAuth = new AuthModel(newUserAuth)
    return (await createAuth.save()) as AuthUserProps
  }

  static async credentials(
    useCredentials: Pick<AuthUserProps, 'email' | 'password'>,
  ): Promise<{ token: string }> {
    const { email, password } = useCredentials

    const findEmail = await AuthModel.findOne({ email })
    if (!findEmail) throw new Error('O email fornecido não foi encontrado.')
    const isMatch = await Encryption.compare(password, findEmail?.password)
    if (!isMatch) throw new Error('A senha fornecida está incorreta.')

    const newAuth: {
      name: string
      email: string
      _id: string
    } = {
      name: findEmail.name,
      email: findEmail.email,
      _id: findEmail.id,
    }

    const token = TokenManager.getInstance().generateToken(newAuth)
    return {
      token,
    }
  }
}
