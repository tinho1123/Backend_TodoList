const db = require('../config//connection');

const userLoginModel = async (email) => {
  const [result] = await db.execute('SELECT * FROM users WHERE email = ?', [email])
  
  return result
}

const userGetAllModel = async () => {
  const [result] = await db.execute('SELECT * FROM users')
  return result;
}

const userGetOneModel = async (email) => {
  const [result] = await db.execute('SELECT * FROM users WHERE email = ?', [email])
  return result;
}

const userCadastrarModel = async (email, password) => {
  const [result] = await db.execute('INSERT INTO users (email, password) VALUES (?,?)', [email, password])
  return result;
}

const userUpdateOnePasswordModel = async (email, password) => {
  const [result] = await db.execute('UPDATE users SET password = ? WHERE email = ?', [password, email])
  return result;
}

const userDeleteUserModel = async (email) => {
  const [result] = await db.execute('DELETE FROM users WHERE email - ?', [email])
  return result;
}

module.exports = {
  userLoginModel,
  userGetAllModel,
  userGetOneModel,
  userCadastrarModel,
  userUpdateOnePasswordModel,
  userDeleteUserModel
}
