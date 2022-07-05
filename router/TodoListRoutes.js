const express = require('express')

const route = express.Router();

// C

route.post('/create')

// R

route.get('/getAll')
route.get('/getOne')

// U

route.put('update')

// D

route.delete('delete')

module.exports = route;