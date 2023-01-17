import * as express from 'express'
import * as cors from 'cors'

import { birds } from './birds'

const app = express()
app.use(cors())

app.get('/', (req, res) => {
  res.send({ message: 'Welcome to api!' })
})

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to api!' })
})

app.get('/birds', (_, res) => {
  res.send(birds)
})

const port = process.env.port || 3333
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`)
})
server.on('error', console.error)

// Export the Express API
module.exports = app
