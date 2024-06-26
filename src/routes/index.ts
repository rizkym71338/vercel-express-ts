import { Express } from 'express'

import { userRoute } from './user-route'

export const routes = (app: Express) => {
  app.get('/', (_, response) => {
    return response.status(200).json({ message: 'Welcome to vercel-express-ts' })
  })

  app.use('/users', userRoute)
}
