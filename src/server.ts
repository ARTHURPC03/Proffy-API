import express from 'express'
// src/server.ts
import routes from './routes'

const app = express()

app.get('/', (request, response) => response.json({ message: 'Hello World' }))

app.listen(3333)
