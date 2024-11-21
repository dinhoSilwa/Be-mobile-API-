import { Router } from "express";
import { AuthController } from "../../controllers/authControllers/auth";

export const routerAuth = Router();
routerAuth.post("/create-credentials", AuthController.createAuth);
routerAuth.post("/login", AuthController.credentials);
