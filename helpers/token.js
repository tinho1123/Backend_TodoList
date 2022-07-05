const json = require('jsonwebtoken');

const createToken = async (body) => {
    return await json.sign(body, process.env.KEY_JWT)
}

module.exports = {
    createToken
}