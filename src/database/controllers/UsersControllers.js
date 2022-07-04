const { userLoginServices, cadastrar, deleteUser, userGetAllServices , UserGetOneServices, updateOnePassword } = require('../services/UsersServices')

 const userLoginControllers = async (req, res) => {
    const { email, password } = req.body
    const user = await userLoginServices(email, password);
    if (user instanceof Error) {
        return res.status(400).json({ token: false ,message: user.message })
    }

    res.status(200).json(user);
}

 const userGetAllControllers = async (req, res) => {
    const user = await userGetAllServices();
    if (user instanceof Error) {
        return res.status(400).json({ token: false ,message: user.message })
    }

    res.status(200).json(user);
}

 const getOne = async (req, res) => {
    const { email, password } = req.body
    const user = await userLoginServices(email, password);
    if (user instanceof Error) {
        return res.status(400).json({ token: false ,message: user.message })
    }

    res.status(200).json(user);
}

 const userCadastrarControllers = async (req, res) => {
  return await db.execute('INSERT INTO users (email, password) VALUES (?,?)', [email, password])
}

 const userUpdateOnePasswordControllers = async (req, res) => {
  return await db.execute('UPDATE users SET password = ? WHERE email = ?', [password, email])
}

 const userDeleteUserControllers = async (req, res) => {
  return await db.execute('DELETE FROM users WHERE email - ?', [email])
}

module.exports = {
    userLoginControllers,
    userGetAllControllers,
}
