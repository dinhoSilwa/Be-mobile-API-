import { Router } from "express";
import { CollaboratorController } from "../../controllers/Collaborator/colaboratorController";

export const routercollaborator = Router();
routercollaborator.get("/list/:role_id", CollaboratorController.getAll);
routercollaborator.get("/:role_id/:id", CollaboratorController.getById);
routercollaborator.post("/create", CollaboratorController.create);
routercollaborator.put("/:role_id/:id", CollaboratorController.update);
routercollaborator.delete("/:id", CollaboratorController.delete);
