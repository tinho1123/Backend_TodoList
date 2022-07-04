const db = require('../config//connection');

const login = async (email, password) => {
  const user = await db.execute('SELECT * FROM users WHERE email = ?', [email])
}