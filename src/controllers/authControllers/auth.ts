import { AuthService } from "../../services/Auth/authService";
import { Response, Request } from "express";

export class AuthController {
  static async createAuth(req: Request, res: Response): Promise<any> {
    try {
      const createAuth = await AuthService.create(req.body);
      const { name, email } = createAuth as any;
      return res.status(201).json({ name, email });
    } catch (error) {
      return res.status(404).json({ msgErro: error });
    }
  }

  static async credentials(req: Request, res: Response): Promise<any> {
    try {
      const getCredentials = await AuthService.credentials(req.body);
      return res.status(200).json(getCredentials);

    } catch (error) {
      if(error instanceof Error){
        return res.status(500).json(`Falha ao Altenticar usuário, ${error.message}`)
      }
      return res.status(500).json({ msgErro: error });
    }
  }
}
