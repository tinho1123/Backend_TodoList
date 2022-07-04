const { userGetAllModel, userGetOneModel, userLoginModel } = require("../models/UserModel")
const { authCryto, decodedCrypto } = require('../helpers/crypt')
const { createToken } = require('../helpers/token')

const userLoginServices = async (email, password) => {
  const user = await userLoginModel(email)
  if (!user) {
    return new Error('Email ou senha está incorreto')
  }
  const verifyPass = decodedCrypto(password, user.password);
  if (!verifyPass) {
    return new Error('Email ou senha está incorreto')
  }

  const token = createToken(user)

  return {
    token,
    user
  };
}

const userGetAllServices = async () => {
    const user = await userGetAllModel()
    if (!user) {
      return new Error('Nenhum usuário encontrado')
    }
  
    return user
}

const userGetOneServices = async (email) => {
    const user = await login(email)
    if (!user) {
      return new Error('Email ou senha está incorreto')
    }
    const verifyPass = decodedCrypto(password, user.password);
    if (!verifyPass) {
      return new Error('Email ou senha está incorreto')
    }
  
    const token = createToken(user)
  
    return {
      token,
      user
    };
}

const userCadastrarServices = async (email, password) => {
  return await db.execute('INSERT INTO users (email, password) VALUES (?,?)', [email, password])
}

const userUpdateOnePasswordServices = async (email, password) => {
  return await db.execute('UPDATE users SET password = ? WHERE email = ?', [password, email])
}

const userDeleteUserServices = async (email) => {
  return await db.execute('DELETE FROM users WHERE email - ?', [email])
}

module.exports = {
    userGetAllServices,
    userDeleteUserServices,
    userCadastrarServices,
    userUpdateOnePasswordServices,
    userGetOneServices,
    userLoginServices

}