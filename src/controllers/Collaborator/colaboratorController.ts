import { CollaboratorServices } from '../../services/Collaborator/collaboratorServices.js'
import { Request, Response } from 'express'
import { ErrorResponse } from '../errors/UnexpectedError.js'
import type { CollaboratorProps } from '../../types/collaborators/collaboratorsTypes.js'

interface SucessCollaboratorResponse {
  code: string
  message: string
  statusCode: number
  data?: CollaboratorProps | CollaboratorProps[] | unknown
}

export class CollaboratorController {
  static async create(
    request: Request,
    response: Response,
  ): Promise<Response | void> {
    try {
      const collaborator = await CollaboratorServices.createCollaborator(
        request.body,
      )
      const successResponse: SucessCollaboratorResponse = {
        code: 'COLLABORATOR_CREATED',
        message: 'Colaborador criado com Sucesso.',
        statusCode: 201,
        data: collaborator,
      }

      response.status(201).json(successResponse)
    } catch (error) {
      if (error instanceof Error) {
        const errorResponse = new ErrorResponse(
          error instanceof Error ? error.name : 'UNKNOW_ERROR',
          error instanceof Error
            ? error.message
            : 'Ocorreu um erro inesperado.',
        )
        return response.status(500).json(errorResponse.setError())
      }
    }
  }

  static async getAll(
    request: Request,
    response: Response,
  ): Promise<Response | void> {
    try {
      const { role_id } = request.params

      const allCollaboratorsByRoleId =
        await CollaboratorServices.getAllColaborator(role_id)
      const successResponse: SucessCollaboratorResponse = {
        code: 'COLLABORATOR_OBTAINED',
        message: 'Colaboradores obtidos com sucesso.',
        statusCode: 200,
        data: allCollaboratorsByRoleId,
      }
      response.status(200).json(successResponse)
    } catch (error) {
      if (error instanceof Error) {
        const responseError = new ErrorResponse(
          error instanceof Error ? error.name : 'UNKNOW_ERROR',
          error instanceof Error
            ? error.message
            : 'Ocorreu um erro inesperado.',
        )
        return response.status(500).json(responseError.setError())
      }
    }
  }

  static async getById(
    request: Request,
    response: Response,
  ): Promise<Response | void> {
    try {
      const { id, role_id } = request.params
      const collaborator = await CollaboratorServices.getColaboratorById(
        id,
        role_id,
      )

      const successResponse: SucessCollaboratorResponse = {
        code: 'COLLABORATOR_OBTAINED',
        message: 'Colaborador obtido com sucesso por ID.',
        statusCode: 200,
        data: collaborator,
      }

      response.status(200).json(successResponse)
    } catch (error) {
      const errorResponse = new ErrorResponse(
        error instanceof Error ? error.name : 'UNKNOW_ERROR',
        error instanceof Error ? error.message : 'Ocorreu um erro inesperado.',
      )
      return response.status(500).json(errorResponse.setError())
    }
  }

  static async update(
    request: Request,
    response: Response,
  ): Promise<Response | void> {
    try {
      const updateCollaborator = await CollaboratorServices.updateCollaborator(
        request.params._id,
        request.body,
      )
      const successResponse: SucessCollaboratorResponse = {
        code: 'UPDATED_COLLABORATOR',
        message: 'Colaborador atualizado com sucesso.',
        statusCode: 200,
        data: updateCollaborator,
      }

      response.status(200).json(successResponse)
    } catch (error) {
      if (error instanceof Error) {
        const responseError = new ErrorResponse(
          error instanceof Error ? error.name : 'UNKNOW_ERROR',
          error instanceof Error
            ? error.message
            : 'Ocorreu um erro inesperado.',
        )
        return response.status(500).json(responseError.setError())
      }
    }
  }

  static async delete(
    request: Request,
    response: Response,
  ): Promise<Response | void> {
    try {
      const deleteCollaborator = await CollaboratorServices.deleteCollaborator(
        request.params.id,
      )

      const successResponse: SucessCollaboratorResponse = {
        code: 'DELETED_COLLABORATOR',
        message: 'Colaborador excluído com sucesso.',
        statusCode: 201,
        data: deleteCollaborator,
      }

      response.status(200).json(successResponse)
    } catch (error) {
      if (error instanceof Error) {
        const responseError = new ErrorResponse(
          error instanceof Error ? error.name : 'UNKNOW_ERROR',
          error instanceof Error
            ? error.message
            : 'Ocorreu um erro inesperado.',
        )
        return response.status(500).json(responseError.setError())
      }
    }
  }
}
