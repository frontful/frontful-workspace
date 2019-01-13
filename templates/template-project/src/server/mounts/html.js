import React from 'react'
import Views from '../../views'
import bodyParser from 'body-parser'
import browserConfig from 'frontful-config/browser'
import compile from './utils/compile'
import cookieParser from 'cookie-parser'
import environment from 'frontful-environment'
import express from 'express'
import path from 'path'
import serverConfig from 'frontful-config/server'
import {Exceptions} from 'frontful-resolver'
import {style} from 'frontful-style'

const app = express()

app.use(cookieParser())
app.use(bodyParser.json())

app.use(express.static(path.resolve(process.cwd(), 'assets/root'), {maxAge: '7d'}))

app.use((req, res, next) => {
  Promise.resolve(serverConfig.isomorphic ? compile(<Views/>, {req, res}): {
    state: '',
    style: style.manager.getSession(req.headers['user-agent']).renderToString(),
    view: '',
  }).then((context) => {
    const bundle = environment.bundle
    res.send(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <title>Template project</title>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no" />
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
          <link rel="stylesheet" href="${bundle.css.main}" />
          ${context.style}
        </head>
        <body>
          <div id="app">${context.view}</div>
          ${browserConfig.getScript()}
          ${context.state}
          <script src="${bundle.js.vendor}"></script>
          <script src="${bundle.js.main}"></script>
        </body>
      </html>
    `)
  }).catch((error) => {
    if (error instanceof Exceptions.Cancel)
      next()
    else
      next(error)
  })
})

export default app
