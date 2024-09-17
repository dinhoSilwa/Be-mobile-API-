import { CollaboratorModel } from "../../Models/Collaborators/collaboratorsModels";
import type { IColalaborator } from "../../types/collaborators/collaboratorsTypes";

export class CollaboratorServices {
  static async createCollaborator(
    Collaborator: IColalaborator
  ): Promise<IColalaborator> {
    const collaborator = new CollaboratorModel(Collaborator);
    return await collaborator.save();
  }

  static async getColaborator(id: string): Promise<IColalaborator[] | null> {
    return await CollaboratorModel.findById(id);
  }

  static async getAllColaboratorList(): Promise<IColalaborator[]> {
    return await CollaboratorModel.find();
  }

  static async UpdateCollaborator(
    id: string,
    data: Partial<IColalaborator>
  ): Promise<IColalaborator | null> {
    return await CollaboratorModel.findByIdAndUpdate(id, data, { new: true });
  }

  static async deleteCollaborator(id: string): Promise<IColalaborator | null> {
    return await CollaboratorModel.findByIdAndDelete(id);
  }
}
