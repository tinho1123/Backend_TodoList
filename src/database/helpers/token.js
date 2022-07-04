const json = require('jsonwebtoken');

const createToken = async (body) => {
    return await json.sign(body)
}

module.exports = {
    createToken
}