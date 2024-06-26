import { Request, Response } from 'express'

import { UserService } from '../services'
import { ErrorResponse, NotFoundResponse, SuccessResponse } from '../libs/response'

export class UserController {
  static async findMany(request: Request, response: Response) {
    try {
      const users = await UserService.findMany()
      return new SuccessResponse({ response, data: users, message: 'OK' })
    } catch (error: any) {
      return new ErrorResponse({ response, message: error.message })
    }
  }

  static async findById(request: Request, response: Response) {
    try {
      const { id } = request.params
      const user = await UserService.findById(id)
      if (!user) return new NotFoundResponse({ response, message: 'User not found' })
      return new SuccessResponse({ response, data: user, message: 'OK' })
    } catch (error: any) {
      return new ErrorResponse({ response, message: error.message })
    }
  }
}
