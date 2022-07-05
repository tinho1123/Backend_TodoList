const express = require('express')

const {
    userGetAllControllers, userLoginControllers, userCadastrarControllers,
    userUpdateOnePasswordControllers, userDeleteUserControllers, userGetOneControllers, userUpdateOneEmailControllers
    }
     = require('../controllers/UsersControllers');

const route = express.Router();

route.post('/login', userLoginControllers);
route.post('/register', userCadastrarControllers)
route.put('/update/password', userUpdateOnePasswordControllers)
route.put('/update/email', userUpdateOneEmailControllers)
route.delete('/delete', userDeleteUserControllers)

route.get('/getall', userGetAllControllers)
route.get('/getone', userGetOneControllers)

module.exports = route;