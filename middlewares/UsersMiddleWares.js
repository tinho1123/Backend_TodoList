const verifyEmail = (req, res, next) => {
    const { email } = req.body;
    if (!email) {
        return res.status(400).json({ message: 'Email is missing!'});
    }
    if (typeof email !== 'string') {
        return res.status(400).json({ message: 'type email is different of string'})
    }
    next();
}

const verifyPassword = (req, res, next) => {
    const { password } = req.body;

    if (!password) {
        return res.status(400).json({ message: 'Password is missing!'});
    }
    if (typeof password !== 'string') {
        return res.status(400).json({ message: 'type password is different of string'})
    }
    next();
}

const verifyLastPassword = (req, res, next) => {
    const { lastPassword } = req.body;

    if (!lastPassword) {
        return res.status(400).json({ message: 'lastPassword is missing!'});
    }
    if (typeof lastPassword !== 'string') {
        return res.status(400).json({ message: 'type lastPassword is different of string'})
    }
    next();
}

const verifyNewPassword = (req, res, next) => {
    const { newPassword } = req.body;

    if (!newPassword) {
        return res.status(400).json({ message: 'newPassword is missing!'});
    }
    if (typeof newPassword !== 'string') {
        return res.status(400).json({ message: 'type newPassword is different of string'})
    }
    next();
}

const verifyConfirmPassword = (req, res, next) => {
    const { confirmPassword } = req.body;

    if (!confirmPassword) {
        return res.status(400).json({ message: 'confirmPassword is missing!'});
    }
    if (typeof confirmPassword !== 'string') {
        return res.status(400).json({ message: 'type confirmPassword is different of string'})
    }
    next();
}

module.exports = {
    verifyEmail,
    verifyPassword,
    verifyLastPassword,
    verifyNewPassword,
    verifyConfirmPassword
}