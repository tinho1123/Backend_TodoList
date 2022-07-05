const crypto = require('bcryptjs');

const authCrypto = (password) => {
    const createCrypt = crypto.hashSync(password)
    return createCrypt;
}

const decodedCrypto = (password, hash) => {
    const verifyCrypt =  crypto.compareSync(password, hash)
    return verifyCrypt
}

module.exports = {
    authCrypto,
    decodedCrypto
}