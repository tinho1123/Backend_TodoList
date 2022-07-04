const db = require('../config//connection');

export const login = async (email, password) => {
  return await db.execute('SELECT * FROM users WHERE email = ?', [email])
}

export const getAll = async () => {
  return await db.execute('SELECT * FROM users')
}

export const getOne = async (email) => {
  return await db.execute('SELECT * FROM users WHERE email = ?', [email])
}
