import { CollaboratorModel } from "../../models/Collaborators/collaboratorsModels";
import type { CollaboratorProps } from "../../types/collaborators/collaboratorsTypes";

export class CollaboratorServices {
  static async createCollaborator(
    Collaborator: CollaboratorProps
  ): Promise<CollaboratorProps> {
    const collaborator = new CollaboratorModel(Collaborator);
    return await collaborator.save();
  }

  static async getColaboratorById(
    id: string,
    role_id: string
  ): Promise<CollaboratorProps | any> {
    const allCollaborator = await CollaboratorModel.find({ role_id });
    const collaboratorById = allCollaborator.filter((item) => item._id == id);

    if (!collaboratorById.length) {
      throw new Error("Colaborador não encontrado pelo ID fornecido.");
    }
    return collaboratorById;
  }

  static async getAllColaborator(
    role_id: string
  ): Promise<CollaboratorProps[]> {
    const collaborators = await CollaboratorModel.find({ role_id });
    if (!collaborators.length) {
      throw new Error(
        "Nenhum colaborador encontrado para o role_id fornecido."
      );
    }
    return collaborators;
  }

  static async updateCollaborator(
    id: string,
    data: Partial<CollaboratorProps>
  ): Promise<CollaboratorProps | void> {
    const updateCollaborator = await CollaboratorModel.findByIdAndUpdate(
      id,
      data,
      {
        new: true,
      }
    );
    if (!updateCollaborator) {
      throw new Error("Colaborador não encontrado para atualização.");
    }
    return updateCollaborator;
  }

  static async deleteCollaborator(
    id: string
  ): Promise<CollaboratorProps | Error> {
    const deleteCollaborator = await CollaboratorModel.findByIdAndDelete(id);
    if (!deleteCollaborator) {
      throw new Error("Falha ao Deletar o Colaborador");
    }
    return deleteCollaborator;
  }
}
