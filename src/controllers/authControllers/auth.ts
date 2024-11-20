import { ErrorResponse } from "../../erros/UnexpectedError";
import { AuthService } from "../../services/Auth/authService";
import { Response, Request } from "express";

interface CreateAuthProps {
  name: string;
  email: string;
}

export class AuthController {
  static async createAuth(
    req: Request,
    res: Response
  ): Promise<Response | void> {
    try {
      await AuthService.create(req.body);
      const sucessResponse = {
        name: "USER_CREATED",
        message: "usuário criado com sucesso",
        statusCode: 201,
      };
      return res.status(201).json(sucessResponse);
    } catch (error) {
      if (error instanceof Error) {
        const errorResponse = new ErrorResponse(error.name, error.message, 500);
        return res.status(500).json(errorResponse.setError());
      }
    }
  }

  static async credentials(
    req: Request,
    res: Response
  ): Promise<Response | void> {
    try {
      const { name, statusCode, message, token } =
        await AuthService.credentials(req.body);

      return res.status(statusCode).json({ name, message, statusCode, token });
    } catch (error) {
      if (error instanceof Error) {
        const responseError = new ErrorResponse(error.name, error.message, 404);
        return res.status(404).json(responseError.setError());
      }
    }
  }
}
