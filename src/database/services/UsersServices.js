import { login, cadastrar, deleteUser, getAll, getOne, updateOnePassword } from "../models/UserModel"
import { authCryto, decodedCrypto } from '../helpers/crypt'

export const login = async (email, password) => {
  const user = await login(email)
  if (!user) {
    return new Error('Email ou senha está incorreto')
  }
  const verifyPass = decodedCrypto(password, user.password);
  if (!verifyPass) {
    return new Error('Email ou senha está incorreto')
  }

  return user;
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
