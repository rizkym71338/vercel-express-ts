import express from 'express'

import { ENV } from './libs'
import { routes } from './routes'

const app = express()

routes(app)

app.listen(ENV.PORT, () => console.log('Server running at PORT: ', ENV.PORT))
