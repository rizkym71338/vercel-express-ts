import express from 'express'

import { PORT } from './libs/env'

const app = express()

app.get('/', (_, response) => {
  response.status(200).send('Welcome to vercel-express-ts!')
})

app.listen(PORT, () => console.log('Server running at PORT: ', PORT))
