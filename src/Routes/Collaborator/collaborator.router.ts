import { Router } from "express";
import { CollaboratorController } from "../../controllers/Collaborator/colaboratorController"

export const routerCollaborator = Router();

routerCollaborator.get("/list/:role_id", CollaboratorController.getAll);
routerCollaborator.post("/create", CollaboratorController.create);
//routerCollaborator.get("/:id", CollaboratorController.getCollaborator);
routerCollaborator.put("/:id", CollaboratorController.update);
routerCollaborator.delete("/:id", CollaboratorController.delete);
