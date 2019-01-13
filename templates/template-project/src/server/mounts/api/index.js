import bodyParser from 'body-parser'
import express from 'express'
import * as store from '../../../store'

const app = express()

app.use(bodyParser.json())

app.get('/list', (req, res, next) => {
  store.list.filter().then((items) => {
    res.json(items)
  }).catch(next)
})

export default app
