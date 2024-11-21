import express, { Application } from "express";
import cors from "cors";
import { routerAuth } from "./Routes/auth/authRouter";
import { routerCollaborator } from "./Routes/Collaborator/collaboratorRouter";
import { corsOptions } from "./middlewares/cors/cors";
import { authenticateToken } from "./middlewares/authenticatedRouter/authenticated";

const app: Application = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/collaborators/", authenticateToken, routerCollaborator);
app.use("/api/auth", routerAuth);
export default app;
