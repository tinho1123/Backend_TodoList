const { userLoginServices, cadastrar, deleteUser, userGetAllServices , UserGetOneServices, updateOnePassword, userCadastrarServices, userUpdateOnePasswordServices, userDeleteUserServices, userGetOneServices } = require('../services/UsersServices')

 const userLoginControllers = async (req, res) => {
    const { email, password } = req.body

    const user = await userLoginServices(email, password);

    if (user instanceof Error) {
        return res.status(400).json({ message: user.message })
    }

    res.status(200).json(user);
}


 const userCadastrarControllers = async (req, res) => {
  const { email, password } = req.body;

  const result = await userCadastrarServices(email, password)

  if (result instanceof Error) {
    return res.status(400).json({ messsage: result.message})
  }

  res.status(200).json(result)
}

const userGetAllControllers = async (req, res) => {
  const user = await userGetAllServices();
  
  if (user instanceof Error) {
      return res.status(400).json({ message: user.message })
  }

  res.status(200).json(user);
}

const userGetOneControllers = async (req, res) => {
  const { email } = req.body

  const user = await userGetOneServices(email);

  if (user instanceof Error) {
      return res.status(400).json({ message: user.message })
  }

  res.status(200).json(user);
}

 const userUpdateOnePasswordControllers = async (req, res) => {
  const { email, lastPassword, newPassword } = req.body;

  const result = await userUpdateOnePasswordServices(email, lastPassword, newPassword)

  if (result instanceof Error) {
    return res.status(400).json({ messsage: result.message})
  }

  res.status(200).json(result)
}

const userUpdateOneEmailControllers = async (req, res) => {
  const { email, password } = req.body;
  const { token } = req.header;

  if (!token) {
    return res.status(400).json({ message: 'Token não passado'})
  }

  const result = await userUpdateOneEmailControllers(token, email, password)

  if (result instanceof Error) {
    return res.status(400).json({ messsage: result.message})
  }

  res.status(200).json(result)
}

 const userDeleteUserControllers = async (req, res) => {
  const { email, password, confirmPassword } = req.body;

  const result = await userDeleteUserServices(email, password, confirmPassword)
  
  if (result instanceof Error) {
    return res.status(400).json({ messsage: result.message})
  }

  res.status(200).json(result)
}

module.exports = {
    userLoginControllers,
    userCadastrarControllers,
    userGetAllControllers,
    userGetOneControllers,
    userUpdateOnePasswordControllers,
    userUpdateOneEmailControllers,
    userDeleteUserControllers
}
