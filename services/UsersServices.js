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
  const user = await User.findOne({
    where: {
      email
    }
  })

  if (user) {
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
    return new Error('Usuário inexistente')
  }

  return user
  
}

const userUpdateOnePasswordServices = async (email, lastPassword, newPassword) => {
  const user = await User.findOne({ where: { email } });
  
  if (!user) {
    return new Error('Email incorreto')
  }

  const verifyPass = decodedCrypto(lastPassword, user.password);

  if (!verifyPass) {
    return new Error('Impossível alterar pois a senha anterior está incorreta')
  }

  const hashPass = authCrypto(newPassword)

  const userUpdated = await User.update(
    {
    password: hashPass
  }, {
    where: { email }
  })

  return {
    updated: true,
  }
}

const userUpdateOneEmailServices = async (token, email, password) => {
  const tokenVerify = verifyToken(token)

  const user = await User.findOne({ where: { email: tokenVerify.email } });
  
  if (!user) {
    return new Error('Email inexistente')
  }

  const verifyPass = decodedCrypto(password, user.password);

  if (!verifyPass) {
    return new Error('Impossível alterar pois a senha está incorreta')
  }

  const userUpdated = await User.update(
    {
    email
  }, {
    where: { email: token.email }
  })

  return {
    updated: true,
    userUpdated
  }
}

const userDeleteUserServices = async (email, password, confirmPassword) => {
  const user = await User.findOne({ where: { email } });
  
  if (!user) {
    return new Error('Email incorreto')
  }

  if (password !== confirmPassword) {
    return new Error('A senha e a confirmação de senha são diferentes')
  }

  const verifyPass = decodedCrypto(password, user.password);

  if (!verifyPass) {
    return new Error('Impossível deletar pois a senha está incorreta')
  }

  await User.destroy(
    {
      where: { email }
    })

  return {
    deleted: true,
  }
}

module.exports = {
    userGetAllServices,
    userDeleteUserServices,
    userCadastrarServices,
    userUpdateOnePasswordServices,
    userUpdateOneEmailServices,
    userGetOneServices,
    userLoginServices

}