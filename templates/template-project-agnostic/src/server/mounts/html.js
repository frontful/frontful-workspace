import environment from 'frontful-environment'
import express from 'express'
import path from 'path'

const app = express()

app.use(express.static(path.resolve(process.cwd(), 'assets/root'), {maxAge: '7d'}))

app.use((req, res) => {
  const bundle = environment.bundle
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>Template project (agnostic)</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="stylesheet" href="${bundle.css.main}" />
      </head>
      <body>
        <div id="app"></div>
        <script src="${bundle.js.vendor}"></script>
        <script src="${bundle.js.main}"></script>
      </body>
    </html>
  `)
})

export default app
