import { CollaboratorModel } from '../../models/collaboratorsModels'
import type { CollaboratorProps } from '../../types/collaborators/collaboratorsTypes'

export class CollaboratorServices {
  static async createCollaborator(
    Collaborator: CollaboratorProps,
  ): Promise<CollaboratorProps> {
    const collaborator = new CollaboratorModel(Collaborator)
    return await collaborator.save()
  }

  static async getColaboratorById(
    id: string,
    role_id: string,
  ): Promise<CollaboratorProps | Response> {
    const allCollaborator = await CollaboratorModel.find({
      role_id,
    })
    const collaboratorById = allCollaborator.filter((item) => item._id == id)

    if (!collaboratorById.length) {
      throw new Error('Colaborador não encontrado pelo ID fornecido.')
    }
    return collaboratorById as unknown as CollaboratorProps
  }

  static async getAllColaborator(
    role_id: string,
  ): Promise<CollaboratorProps[]> {
    const collaborators = await CollaboratorModel.find({
      role_id,
    })
    if (!collaborators.length) {
      return collaborators
    }
    return collaborators
  }

  static async updateCollaborator(
    _id: string,
    data: Partial<CollaboratorProps>,
  ): Promise<CollaboratorProps | void> {
    const { role_id } = data
    const findCollaborato = await CollaboratorModel.findOne({
      _id: _id,
      role_id,
    })
    if (!findCollaborato) {
      throw new Error('Id não encontrado')
    }

    const updateCollaborator = await CollaboratorModel.findByIdAndUpdate(
      _id,
      data,
      {
        new: true,
      },
    )
    if (!updateCollaborator) {
      throw new Error('Colaborador não encontrado para atualização.')
    }
    return updateCollaborator
  }

  static async deleteCollaborator(
    id: string,
  ): Promise<CollaboratorProps | Error> {
    const deleteCollaborator = await CollaboratorModel.findByIdAndDelete(id)
    if (!deleteCollaborator) {
      throw new Error('Falha ao Deletar o Colaborador')
    }
    return deleteCollaborator
  }
}
