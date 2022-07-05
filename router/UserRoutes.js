const express = require('express')

const { cadastrar, deleteUser, userGetAllControllers, userLoginControllers, getOne,  updateOnePassword} = require('../controllers/UsersControllers');
const route = express.Router();

route.get('/login', userLoginControllers);
route.get('/getall', userGetAllControllers)

module.exports = route;