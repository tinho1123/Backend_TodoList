import { login, cadastrar, deleteUser, getAll, getOne, updateOnePassword } from '../services/UsersServices'

export const login = async (req, res) => {
    const { email, password } = req.body
    const user = await login(email, password);
    if (user instanceof Error) {
        return res.status(400).json({ returned: false ,message: user.message })
    }
}

export const getAll = async () => {
  return await db.execute('SELECT * FROM users')
}

export const getOne = async (email) => {
  return await db.execute('SELECT * FROM users WHERE email = ?', [email])
}

export const cadastrar = async (email, password) => {
  return await db.execute('INSERT INTO users (email, password) VALUES (?,?)', [email, password])
}

export const updateOnePassword = async (email, password) => {
  return await db.execute('UPDATE users SET password = ? WHERE email = ?', [password, email])
}

export const deleteUser = async (email) => {
  return await db.execute('DELETE FROM users WHERE email - ?', [email])
}
