import { Router } from 'express'
import { AuthController } from '../../controllers/authControllers/auth'

export const routeauth = Router()
routeauth.post('/signup', AuthController.createAuth)
routeauth.post('/login', AuthController.credentials)
