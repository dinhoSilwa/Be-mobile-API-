import express, { Application } from "express";
import cors from "cors";
import { router } from "./Routes/Collaborator/collaborator.router";
import { routerAuth } from "./Routes/auth/authRouter";

const app: Application = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"], // métodos permitidos
    allowedHeaders: ["Content-Type", "Authorization"], // cabeçalhos permitidos
  })
);

app.use(express.json());
app.use("/api/collaborators/", router);
app.use('/api/auth', routerAuth)
export default app;
