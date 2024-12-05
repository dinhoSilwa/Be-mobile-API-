import jwt from 'jsonwebtoken'
import type { JwtPayload } from 'jsonwebtoken'
import { configDotenv } from 'dotenv'
configDotenv()

export class TokenManager {
  private static instance: TokenManager
  private secretKey: string

  private constructor() {
    this.secretKey = process.env.JWT_SECRET_KEY || ''
    if (!this.secretKey) {
      throw new Error('JWT_SECRET_KEY não definido no ambiente.')
    }
  }

  public static getInstance(): TokenManager {
    if (!TokenManager.instance) {
      TokenManager.instance = new TokenManager()
    }
    return TokenManager.instance
  }

  public generateToken(payload: object, expiresIn: string = '1h'): string {
    if (!this.secretKey) {
      throw new Error('Chave secreta não configurada.')
    }
    return jwt.sign(payload, this.secretKey, { expiresIn })
  }

  public encodeToken(token: string): JwtPayload | null {
    try {
      if (!token) {
        throw new Error('Token não fornecido.')
      }
      return jwt.decode(token) as JwtPayload
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`${(error.name, error.message)}`)
      }
      return null
    }
  }

  public verifyToken(token: string): JwtPayload | null {
    try {
      if (!token) {
        throw new Error('Token não fornecido.')
      }

      return jwt.verify(token, this.secretKey) as JwtPayload
    } catch (error) {
      if (error instanceof jwt.TokenExpiredError) {
        throw new Error(`Falha na altenticação ${(error.name)}`)
      }

      return null
    }
  }
}
