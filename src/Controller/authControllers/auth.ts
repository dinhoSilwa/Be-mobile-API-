import { AuthService } from "../../services/Auth/authService";
import { Response, Request } from "express";

export class AuthController {
  static async createAuth(req: Request, res: Response): Promise<any> {
    try {
      const createAuth = await AuthService.create(req.body);
      res.status(201).json({ createAuth });
    } catch (error) {
      res.status(404).json({ msgErro: error });
    }
  }

  static async credentials(req: Request, res: Response): Promise<any> {
    try {
      const getCredentials = await AuthService.credentials(req.body);
      res.status(200).json(getCredentials);
    } catch (error) {
      res.status(500).json({ msgErro: error });
    }
  }
}
