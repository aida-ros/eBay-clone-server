const { Router } = require('express')
const Item = require('./model')

const router = new Router()

router.get('/example', function (req, res, next) {
  res.json({ message: 'This is an example' })
})

module.exports = router