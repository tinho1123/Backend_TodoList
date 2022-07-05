const express = require('express')

const {
    userGetAllControllers, userLoginControllers, userCadastrarControllers,
    userUpdateOnePasswordControllers, userDeleteUserControllers,
    userGetOneControllers, userUpdateOneEmailControllers
    }
     = require('../controllers/UsersControllers');

const { tokenInHeader, verifyToken } = require('../middlewares/TokenMiddleware')

const { verifyLastPassword, verifyEmail, verifyConfirmPassword,
    verifyNewPassword, verifyPassword }
     = require('../middlewares/UsersMiddleWares')

const route = express.Router();

// C

route.post('/login', userLoginControllers);

route.post('/register', userCadastrarControllers)

// R
route.get('/getall', userGetAllControllers)

route.get('/getone', userGetOneControllers)

// U

route.put(
    '/update/password',
    tokenInHeader,
    verifyToken,
    verifyEmail,
    verifyLastPassword,
    verifyNewPassword,
    userUpdateOnePasswordControllers
    )

route.put(
    '/update/email',
    tokenInHeader,
    verifyToken,
    verifyEmail,
    verifyPassword,
    userUpdateOneEmailControllers
    )

// D

route.delete(
    '/delete',
    tokenInHeader,
    verifyToken,
    verifyEmail,
    verifyPassword,
    verifyConfirmPassword,
    userDeleteUserControllers
    )



module.exports = route;