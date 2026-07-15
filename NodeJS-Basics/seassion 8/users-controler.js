
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const asyncWrapper = require('../middlewere/asyncWrapper');
const  httpStatusText = require('../utils/httpStatusText');
const User = require('../models/user_model');
const AppError = require('../utils/appError');
const generateJWT = require('../utils/generateJWT');
require('dotenv').config({ path: '../utils/.env' });

const getAllUsers = asyncWrapper(async (req, res) => {
const query = req.query;
    const limit = query.limit || 10;
    const page = query.page || 1;
    const skip = (page - 1) * limit;
    //get all courses from the database
    const users = await User.find({},{"__v":false, "password":false}).limit(limit).skip(skip);

    res.json({ status: httpStatusText.SUCCESS, data: { users } });
})


const register = asyncWrapper(async (req, res, next) => {
    const { firstName, lastName, email, password } = req.body;

    const oldUser = await User.findOne({ email: email });

    if(oldUser){
        const error = AppError.create('User already exists', 400, httpStatusText.FAILED);
        return next(error);
    }

    //password hashing can be added here for security
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User
    ({ 
        firstName, 
        lastName, 
        email, 
        password: hashedPassword
        
    });

    const token = await generateJWT({email: user.email, id: user._id});
    user.token = token;

    await user.save();

    res.status(201).json({ status: httpStatusText.SUCCESS, data: { user } });
});

const login = asyncWrapper(async (req, res, next) => {
    // Implementation for user login
    const { email, password } = req.body;

    if (!email && !password) {
        const error = AppError.create('Email and password are required', 400, httpStatusText.FAILED);
        return next(error);
    }

    const newMail = await User.findOne({ email: email });

    if (!newMail) {
        const error = AppError.create('User not found', 404, httpStatusText.FAILED);
        return next(error);
    }

    const matchedPassword = await bcrypt.compare(password, newMail.password);

    if (newMail && matchedPassword) {
        const token = await generateJWT({email: newMail.email, id: newMail._id});
        res.json({ status: httpStatusText.SUCCESS, data: { token } });
    } else {
        const error = AppError.create('something wrong', 500, httpStatusText.ERROR);
        return next(error);
    }


});

module.exports = {
    getAllUsers,
    register,
    login
}