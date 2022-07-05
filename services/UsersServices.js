const { authCrypto, decodedCrypto } = require('../helpers/crypt')
const { createToken, verifyToken } = require('../helpers/token');
const { User,  TodoList, TypeCard, Card } = require('../models');


const userLoginServices = async (email, password) => {
  const user = await User.findOne({ where: { email }, include: [{
    model: TodoList,
    as: 'todoListName',
    include: [{
      model: TypeCard,
      include: [{
        model: Card,
        as: 'cardName'
      }],
    }],
    
  }]});
  
  if (!user) {
    return new Error('Email ou senha está incorreto')
  }

  const verifyPass = decodedCrypto(password, user.password);

  if (!verifyPass) {
    return new Error('Email ou senha está incorreto')
  }

  const token = createToken({ email: user.email, password: user.password });

  return {
    token,
    user
  };
}

const userCadastrarServices = async (email, password) => {
  const user = await User.findAll({
    where: {
      email
    }
  })

  if (user.length > 1) {
    return new Error('Usuário já existe')
  }

  const cryptoPass = authCrypto(password)

  if (!cryptoPass) {
    return new Error('Houve um erro ao criar a conta, tente novamente')
  }

  await User.create({
    email: email,
    password: cryptoPass
  })


  return {
    created: true,

  };
  
}

const userGetAllServices = async () => {
  const user = await User.findAll()
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