import { Router } from "express";
import { CollaboratorController } from "../../Controller/Collaborator/colaboratorController";

export const routerCollaborator = Router();

routerCollaborator.get("/", CollaboratorController.getallCollaboratorList);
routerCollaborator.post("/", CollaboratorController.createCollaborator);
routerCollaborator.get("/:id", CollaboratorController.getCollaborator);
routerCollaborator.put("/:id", CollaboratorController.updateCollaborator);
routerCollaborator.delete("/:id", CollaboratorController.deleteCollaborator);
