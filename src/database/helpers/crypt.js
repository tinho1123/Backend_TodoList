const crypto = require('bcryptjs');

const authCryto = async (password) => {
    return await  crypto.hash(password, process.env.KEY_BCRYPTJS)
}

const decodedCrypto = async (password, hash) => {
    return await crypto.compareSync(password, hash)
}

module.exports = {
    authCryto,
    decodedCrypto
}