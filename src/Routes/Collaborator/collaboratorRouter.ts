import { Router } from 'express';
import { CollaboratorController } from '../../controllers/Collaborator/colaboratorController';

export const routerCollaborator = Router();
routerCollaborator.post('/list/:role_id', CollaboratorController.getAll);
routerCollaborator.get('/:role_id/:id', CollaboratorController.getById);
routerCollaborator.post('/create', CollaboratorController.create);
routerCollaborator.put('/:id', CollaboratorController.update);
routerCollaborator.delete('/:id', CollaboratorController.delete);
