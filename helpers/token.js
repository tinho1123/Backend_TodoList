const json = require('jsonwebtoken');

const createToken = (body) => {
    const token =  json.sign(body, process.env.KEY_JWT, { algorithm: 'HS256' })
    return token
}

const verifyToken = (body) => {
    const verify = json.verify(body, process.env.KEY_JWT)
    return verify;
}

module.exports = {
    createToken,
    verifyToken,
}