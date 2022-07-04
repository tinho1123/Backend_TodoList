const crypto = require('bcryptjs');

export const authCryto = async (password) => {
    return await  crypto.hash(password, process.env.KEY_BCRYPTJS)
}

export const decodedCrypto = async (password, hash) => {
    return await crypto.compareSync(password, hash)
}