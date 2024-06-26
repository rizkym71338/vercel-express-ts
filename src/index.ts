import express from 'express'

import { PORT } from './libs/env'
import { prisma } from './libs/prisma'

const app = express()

app.get('/', (_, response) => {
  response.status(200).json({ message: 'Welcome to vercel-express-ts' })
})

app.get('/ping', (_, response) => {
  response.status(200).json({ message: 'pong!' })
})

app.get('/users', async (_, response) => {
  const users = await prisma.user.findMany({ orderBy: { createdAt: 'desc' } })

  response.status(200).json({ users })
})

app.listen(PORT, () => console.log('Server running at PORT: ', PORT))
