import express from 'express'

import { ENV } from './libs'
import { routes } from './routes'

const app = express()

routes(app)

app.listen(ENV.PORT, () => console.log(`[${ENV.NODE_ENV}] Server running at PORT: ${ENV.PORT}`))
