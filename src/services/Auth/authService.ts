import { TokenManager } from "../../middlewares/jwtToken/tokenGenerate";
import { AuthModel, type AuthUserProps } from "../../models/Auth/authModel"
import { Encryption } from "../../utils/encryption/encryptionPassword";

//Encryption é uma class Externa

export class AuthService {
  static async create(useAuth: AuthUserProps): Promise<AuthUserProps | null> {
    if (!useAuth) return null;
    const { name, email, password } = useAuth;
    const encryptPass = await Encryption.encryptPassword(password);
    const newUserAuth = { name, email, password: encryptPass };
    const createAuth = new AuthModel(newUserAuth);
    return (await createAuth.save()) as AuthUserProps;
  }

  static async credentials(
    useCredentials: Pick<AuthUserProps, "email" | "password">
  ): Promise<any> {
    const { email, password } = useCredentials;
    const findEmail = await AuthModel.findOne({ email });
    if (!findEmail) {
      return { msg: "Falha ao Obter Email" };
    }
    const isMatch = await Encryption.compare(password, findEmail?.password);

    if (!isMatch) return { msg: "Senha incorreta" };

    const newAuth = {
      name: findEmail.name,
      email: findEmail.email,
      id: findEmail.id,
    };

    const token = TokenManager.getInstance().generateToken(newAuth);
    return { token };
  }
}
