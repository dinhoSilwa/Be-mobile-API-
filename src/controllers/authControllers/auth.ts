import { ErrorResponse } from '../errors/UnexpectedError';
import { AuthService } from '../../services/Auth/authService';
import { Response, Request } from 'express';

interface SucessAuthResponse {
  name: string;
  message: string;
  statusCode: number;
  token: string | null;
}

export class AuthController {
  static async createAuth(
    req: Request,
    res: Response,
  ): Promise<Response | void> {
    try {
      await AuthService.create(req.body);
      const sucessResponse: SucessAuthResponse = {
        name: 'USER_CREATED',
        message: 'usuário criado com sucesso',
        statusCode: 201,
        token: null,
      };
      return res.status(201).json(sucessResponse);
    } catch (error) {
      const errorResponse = new ErrorResponse(
        error instanceof Error ? error.name : 'UNKNOW_ERROR',
        error instanceof Error ? error.message : 'Ocorreu um erro inesperado.',
        500,
      );
      return res.status(500).json(errorResponse.setError());
    }
  }

  static async credentials(
    req: Request,
    res: Response,
  ): Promise<Response | void> {
    try {
      const { token } = await AuthService.credentials(req.body);

      const sucessResponse: SucessAuthResponse = {
        name: 'USER_AUTH',
        message: 'usuário Autenticado com sucesso',
        statusCode: 200,
        token: token,
      };

      return res.status(200).json(sucessResponse);
    } catch (error) {
      const responseError = new ErrorResponse(
        error instanceof Error ? error.name : 'UNKNOW_ERROR',
        error instanceof Error ? error.message : 'Ocorreu um erro inesperado.',
        404,
      );
      return res.status(404).json(responseError.setError());
    }
  }
}
