const mysql = require('mysql2/promise')
require('dotenv/config')

const connection = mysql.createPool({
    database: 'todoListBackend',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_USER || 'Well.10091999',
    host: 'localhost'
})

module.exports = connection