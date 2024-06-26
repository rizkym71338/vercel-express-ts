import express from 'express'

import { PORT } from './libs/env'

const app = express()

app.get('/', (_, response) => {
  response.status(200).json({ message: 'Welcome to vercel-express-ts' })
})

app.get('/ping', (_, response) => {
  response.status(200).json({ message: 'pong!' })
})

app.listen(PORT, () => console.log('Server running at PORT: ', PORT))
