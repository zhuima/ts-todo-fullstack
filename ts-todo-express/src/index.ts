import express, { Express } from 'express'

import cors from 'cors'

import todoRoutes from './routes'
import DBConnect from './config'
import { errorHandler, notFound } from './middleware'

// init Mongodb
DBConnect()

const app: Express = express()
app.use(cors())
app.disable('etag')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// routes
app.use('/api/todos', todoRoutes)

app.use(notFound)
app.use(errorHandler)

const PORT: string | number = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`)
})
