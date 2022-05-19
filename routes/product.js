const express = require('express')


const api = express.Router()

api.post('/products', (req, res) => res.status(201).send({ succes: false}))

module.exports = api