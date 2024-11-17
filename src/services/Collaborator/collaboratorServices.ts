import { CollaboratorModel } from "../../Models/Collaborators/collaboratorsModels";
import type { IColalaborator } from "../../types/collaborators/collaboratorsTypes";

export class CollaboratorServices {
  static async createCollaborator(
    Collaborator: IColalaborator
  ): Promise<IColalaborator> {
    const { role_id } = Collaborator;

    const collaborator = new CollaboratorModel({
      ...Collaborator,
      role_id,
    });
    return await collaborator.save();
  }

  static async getColaborator(id: string): Promise<IColalaborator[] | null> {
    return await CollaboratorModel.findById(id);
  }

  static async getAllColaboratorList(
    role_id: string
  ): Promise<IColalaborator[]> {
    return await CollaboratorModel.find({ role_id });
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
