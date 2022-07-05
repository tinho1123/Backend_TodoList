const json = require('jsonwebtoken');

const createToken = async (body) => {
    return await json.sign(body, process.env.KEY_JWT, { expiresIn: '24h', algorithm: 'HS256'})
}

module.exports = {
    createToken
}