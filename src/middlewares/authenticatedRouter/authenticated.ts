import type { NextFunction, Request, Response } from 'express'
import { TokenManager } from '../jwtToken/tokenGenerate.js'
import type { userToken } from '../../types/types.js'

export const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction,
): void | Response => {
  try {
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        error: 'Token Não Fornecido ou inválido',
      })
    }
    const token = authHeader.split(' ')[1]
    const tokenManager = TokenManager.getInstance()
    const decodedToken = tokenManager.verifyToken(token) as userToken
    if (!decodedToken) {
      return res.status(403).json({
        error: 'Token inválido ou expirado',
      })
    }

    req.user = decodedToken
    next()
  } catch (error) {
    const errorMessage =
      error instanceof Error
        ? `Falha na autenticação , ${error.message}`
        : 'Falha na autenticação, Erro não indentificado'

    return res.status(500).json({
      error: errorMessage,
    })
  }
}
