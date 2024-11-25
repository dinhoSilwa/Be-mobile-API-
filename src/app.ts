import express, { Application } from "express";
import cors from "cors";
import { authenticateToken } from "./middlewares/authenticatedRouter/authenticated";
import { corsOptions } from "./middlewares/cors/cors";
import { routeauth } from "./routes/auth/route";
import { routercollaborator } from "./routes/Collaborator/route";

const app: Application = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/collaborators/", authenticateToken, routercollaborator);
app.use("/api/auth", routeauth);
export default app;
