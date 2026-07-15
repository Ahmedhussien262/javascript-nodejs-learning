const jwt = require('jsonwebtoken');
require('dotenv').config({ path: '../utils/.env' });
const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    console.log(decoded);
    next();
}

module.exports = verifyToken;