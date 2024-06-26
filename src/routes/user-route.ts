import { Router } from 'express'

import { UserController } from '../controllers'

export const userRoute = Router()

userRoute.get('/', UserController.findMany)
userRoute.get('/:id', UserController.findById)
