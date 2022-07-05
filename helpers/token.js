const json = require('jsonwebtoken');

const createToken = (body) => {
    const token =  json.sign(body, process.env.KEY_JWT, { algorithm: 'HS256' })
    return token
}

module.exports = {
    createToken,
    
}