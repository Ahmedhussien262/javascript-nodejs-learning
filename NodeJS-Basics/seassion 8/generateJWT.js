const jwt = require('jsonwebtoken');
require('dotenv').config({ path: './env' }); 

module.exports = async (pyload) => {
    //generate token for the user
    const token = await jwt.sign({ 
        email: user.email, id: user._id }, 
        process.env.JWT_SECRET_KEY, 
        { expiresIn: '1m' }
    );
    return token;
}