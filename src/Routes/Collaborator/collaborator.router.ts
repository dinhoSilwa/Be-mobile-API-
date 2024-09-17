import { Router } from "express";
import { CollaboratorController } from "../../Controller/Collaborator/colaboratorController";

export const router = Router();

router.get("/", CollaboratorController.getallCollaboratorList);
router.post("/", CollaboratorController.createCollaborator);
router.get("/:id", CollaboratorController.getCollaborator);
router.put("/:id", CollaboratorController.updateCollaborator);
router.delete("/:id", CollaboratorController.deleteCollaborator);
