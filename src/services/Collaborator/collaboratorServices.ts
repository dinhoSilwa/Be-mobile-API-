import { CollaboratorModel } from "../../models/Collaborators/collaboratorsModels";
import type { CollaboratorProps } from "../../types/collaborators/collaboratorsTypes";

export class CollaboratorServices {
  static async createCollaborator(
    Collaborator: CollaboratorProps
  ): Promise<CollaboratorProps> {
    const collaborator = new CollaboratorModel(Collaborator);
    return await collaborator.save();
  }

  static async getColaborator(id: string): Promise<CollaboratorProps[] | null> {
    return await CollaboratorModel.findById(id);
  }

  static async getAllColaboratorList(
    role_id: string
  ): Promise<CollaboratorProps[] | any> {
    try {
      return await CollaboratorModel.find({ role_id });
    } catch (error) {
      return { msg: "Nenhum dado" };
    }
  }

  static async UpdateCollaborator(
    id: string,
    data: Partial<CollaboratorProps>
  ): Promise<CollaboratorProps | null> {
    return await CollaboratorModel.findByIdAndUpdate(id, data, { new: true });
  }

  static async deleteCollaborator(
    id: string
  ): Promise<CollaboratorProps | null> {
    return await CollaboratorModel.findByIdAndDelete(id);
  }
}
