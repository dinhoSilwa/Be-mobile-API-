import { CollaboratorServices } from "../../services/Collaborator/collaboratorServices";
import { Request, Response } from "express";

export class CollaboratorController {
  static async createCollaborator(req: Request, res: Response): Promise<void> {
    try {
      const collaborator = await CollaboratorServices.createCollaborator(
        req.body
      );
      res.status(201).json(collaborator);
    } catch (error) {
      res.status(500).json({ error: "Error creating Collaborator" });
    }
  }

  static async getCollaborator(req: Request, res: Response): Promise<void> {
    try {
      const collaborator = await CollaboratorServices.getColaborator(
        req.params.id
      );
      res.status(200).json({ collaborator });
    } catch (error) {
      res.status(500).json({ error: "Error Fetching Collaborator" });
    }
  }

  static async getallCollaboratorList(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const getAll = await CollaboratorServices.getAllColaboratorList();
      res.status(200).json(getAll);
    } catch (error) {
      res.status(404).json({ error: "Error To get All Collaborator" });
    }
  }

  static async updateCollaborator(req: Request, res: Response): Promise<void> {
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
      res.status(500).json({ error: "Error Updating Collaborator" });
    }
  }

  static async deleteCollaborator(req: Request, res: Response): Promise<void> {
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
