const { Router } = require('express');
const express = require('express')

const { cadastrar, deleteUser, userGetAllControllers, userLoginControllers, getOne,  updateOnePassword, userCadastrarControllers} = require('../controllers/UsersControllers');
const route = express.Router();

route.post('/login', userLoginControllers);
route.post('/cadastrar', userCadastrarControllers)

route.get('/getall', userGetAllControllers)

module.exports = route;