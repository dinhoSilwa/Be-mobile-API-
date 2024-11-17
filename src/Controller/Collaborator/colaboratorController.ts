import { CollaboratorServices } from "../../services/Collaborator/collaboratorServices";
import { Request, Response } from "express";

export class CollaboratorController {
  static async create(req: Request, res: Response): Promise<void> {
    try {
      const collaborator = await CollaboratorServices.createCollaborator(
        req.body
      );
      res.status(201).json({ sucess: "Usuário cadastrado com Sucesso" });
    } catch (error) {
      res
        .status(500)
        .json({ error: "Error creating Collaborator", msg: error });
    }
  }

  static async get(req: Request, res: Response): Promise<void> {
    try {
      const collaborator = await CollaboratorServices.getColaborator(
        req.params.id
      );
      res.status(200).json({ collaborator });
    } catch (error) {
      res
        .status(500)
        .json({ error: "Error Fetching Collaborator", msg: error });
    }
  }

  static async getAll(req: Request, res: Response): Promise<void> {
    try {
      const allCollaboratorsByRoleId =
        await CollaboratorServices.getAllColaboratorList(req.params.role_id);
      res.status(200).json(allCollaboratorsByRoleId);
    } catch (error) {
      res
        .status(500)
        .json({ error: "Error To get All Collaborator", msg: error });
    }
  }

  static async update(req: Request, res: Response): Promise<void> {
    try {
      const updateCollaborator = await CollaboratorServices.UpdateCollaborator(
        req.params.id,
        req.body
      );
      if (!updateCollaborator) {
        res.status(404).json({ message: "Collaborator Not Found" });
        return;
      }
      res.status(200).json(updateCollaborator);
    } catch (error) {
      res
        .status(500)
        .json({ error: "Error Updating Collaborator", msg: error });
    }
  }

  static async delete(req: Request, res: Response): Promise<void> {
    try {
      const deleteCollaborator = await CollaboratorServices.deleteCollaborator(
        req.params.id
      );
      if (!deleteCollaborator) {
        res.status(404).json({ Message: "Collaborator Not Found" });
      }
      res.status(200).json({ Message: "Collaborator Deleted Sucessfully" });
    } catch (error) {
      res.status(500).json({ message: "Error to Delete Collaborator" });
    }
  }
}
