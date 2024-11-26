import { TokenManager } from "../../middlewares/jwtToken/tokenGenerate";
import { Encryption } from "../../utils/encryption/encryptionPassword";
import { model, Schema, type Document } from "mongoose";

interface AuthUserProps extends Document {
  name: string;
  email: string;
  password: string;
}

const AuthUser = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

const AuthModel = model<AuthUserProps>(
  "authUsers",
  AuthUser,
  "authenticated-users",
);

//Encryption é uma class Externa

export class AuthService {
  static async create(useAuth: AuthUserProps): Promise<AuthUserProps | string> {
    const { name, email, password } = useAuth;
    if (!useAuth) {
      throw new Error("Falha ao Obter Dados do usuários");
    }
    const encryptPass = await Encryption.encryptPassword(password);
    const newUserAuth = { name, email, password: encryptPass };
    const createAuth = new AuthModel(newUserAuth);
    return (await createAuth.save()) as AuthUserProps;
  }

  static async credentials(
    useCredentials: Pick<AuthUserProps, "email" | "password">,
  ): Promise<{ token: string }> {
    const { email, password } = useCredentials;

    const findEmail = await AuthModel.findOne({ email });
    if (!findEmail) throw new Error("O email fornecido não foi encontrado.");
    const isMatch = await Encryption.compare(password, findEmail?.password);
    if (!isMatch) throw new Error("A senha fornecida está incorreta.");

    const newAuth: { name: string; email: string; _id: string } = {
      name: findEmail.name,
      email: findEmail.email,
      _id: findEmail.id,
    };

    const token = TokenManager.getInstance().generateToken(newAuth);
    return {
      token,
    };
  }
}
