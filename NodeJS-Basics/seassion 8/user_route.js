const express = require('express');
const verifyToken = require('../middlewere/verfiyToken');

const router = express.Router();

const userController = require('../conrollers/users-controler');

// Get all users


//register

//login


router.route('/')
    .get(verifyToken, userController.getAllUsers)
    

    router.route('/register')
    .post(userController.register)

    router.route('/login')
    .post(userController.login)



module.exports = router;
