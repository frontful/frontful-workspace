import api from './api'
import environment from 'frontful-environment'
import express from 'express'
import html from './html'

const app = express()

app.use('/api', api)
app.use('/', html)
app.use(environment.error.getHandler())

export default app
