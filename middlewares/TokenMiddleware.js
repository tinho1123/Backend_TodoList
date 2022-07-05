const jwt = require('jsonwebtoken')

const tokenInHeader = (req, res, next) => {
    const { token } = req.headers
    if (!token) {
        return res.status(401).json({ message: 'Token is missing'})
    }

    if (typeof token !== 'string' ) {
        return res.status(401).json({ message: 'type token is different to string' })
    }

    next()
}

const verifyToken = async (req, res, next) => {
    const { token } = req.headers;

    await jwt.verify(token, process.env.KEY_JWT, (err, decoded) => {
        if (err) {
            return res.status(400).json({ message: 'token expired' })
        }
         req.user = decoded
         next()
    })
}



module.exports = {
    tokenInHeader,
    verifyToken
}