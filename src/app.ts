import express, { Application } from 'express'
import cors from 'cors'
import { authenticateToken } from './middlewares/authenticatedRouter/authenticated.js'
import { routeauth } from './routes/auth/route.js'
import { routercollaborator } from './routes/Collaborator/route.js'
import corsOptions from './middlewares/cors/cors.js'

export const app: Application = express()
app.use(cors(corsOptions))
app.use(express.json())
app.use('/api/collaborators/', authenticateToken, routercollaborator)
app.use('/api/auth', routeauth)
