import express, { Application } from "express";
import cors from "cors";
import { router } from "./Routes/Collaborator/collaborator.router";

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use("/api/collaborators", router);
export default app;
