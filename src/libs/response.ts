import { Response } from 'express'

import { ENV } from './env'

interface ResponseProps {
  response: Response
  message: string
  data?: any
}

export class SuccessResponse {
  constructor({ response, data, message }: ResponseProps) {
    response.status(200).json({ message, data })
  }
}

export class NotFoundResponse {
  constructor({ response, message }: ResponseProps) {
    response.status(404).json({ message })
  }
}

export class BadRequestResponse {
  constructor({ response, message }: ResponseProps) {
    response.status(400).json({ message })
  }
}

export class ErrorResponse {
  constructor({ response, message }: ResponseProps) {
    response.status(500).json({ message: ENV.IS_PRODUCTION ? message : 'Internal server error' })
  }
}

export class UnauthorizedResponse {
  constructor({ response, message }: ResponseProps) {
    response.status(401).json({ message })
  }
}
