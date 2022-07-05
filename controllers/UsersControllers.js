const { userLoginServices, cadastrar, deleteUser, userGetAllServices , UserGetOneServices, updateOnePassword, userCadastrarServices } = require('../services/UsersServices')

 const userLoginControllers = async (req, res) => {
    const { email, password } = req.body
    const user = await userLoginServices(email, password);
    if (user instanceof Error) {
        return res.status(400).json({ message: user.message })
    }

    res.status(200).json(user);
}

 const userGetAllControllers = async (req, res) => {
    const user = await userGetAllServices();
    if (user instanceof Error) {
        return res.status(400).json({ message: user.message })
    }

    res.status(200).json(user);
}

 const userGetOneControllers = async (req, res) => {
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

 const userUpdateOnePasswordControllers = async (req, res) => {
  return await db.execute('UPDATE users SET password = ? WHERE email = ?', [password, email])
}

 const userDeleteUserControllers = async (req, res) => {
  return await db.execute('DELETE FROM users WHERE email - ?', [email])
}

module.exports = {
    userLoginControllers,
    userCadastrarControllers,
    userGetAllControllers,
    userGetOneControllers,
    userUpdateOnePasswordControllers,
    userDeleteUserControllers
}
