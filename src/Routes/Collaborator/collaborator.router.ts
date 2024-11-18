import { Router } from "express";
import { CollaboratorController } from "../../Controller/Collaborator/colaboratorController";

export const routerCollaborator = Router();

routerCollaborator.get("/list/:role_id", CollaboratorController.getAll);
routerCollaborator.post("/create", CollaboratorController.create);
//routerCollaborator.get("/:id", CollaboratorController.getCollaborator);
routerCollaborator.put("/:id", CollaboratorController.update);
routerCollaborator.delete("/:id", CollaboratorController.delete);
