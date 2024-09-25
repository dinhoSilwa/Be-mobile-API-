import express, { Application } from "express";
import cors from "cors";
import { router } from "./Routes/Collaborator/collaborator.router";

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
export default app;
