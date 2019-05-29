const express = require('express')
const itemsRouter = require('./items/routes')
const sellersRouter = require('./sellers/routes')

const app = express()
const port = process.env.PORT || 4000

app
  .use(itemsRouter)
  .use(sellersRouter)
  .listen(port, () => console.log(`Listening on port ${port}`))

module.exports = app