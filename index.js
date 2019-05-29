const express = require('express')
const app = express()

app.get('/houses', function (req, res, next) {
  res.json({ message: 'Read all houses' })
})

const port = 4000
app.listen(port, () => `Listening on port ${port}`)