const express = require('express');

const {body} = require('express-validator');

const router = express.Router();

const { 
    getAllCourse, 
    getCourseById, 
    postCreateCourse, 
    updateCourseById, 
    deleteCourseById 
} = require('../conrollers/courses-conroler');
// Get all courses
router.route('/')
    .get(getAllCourse)
    .post([
            body('title')
                .notEmpty()
                .isLength({ min: 2})
                .withMessage('Title must be at least 2 characters long'),
                body('price')
                .notEmpty()
                .withMessage('Price must be a positive number')
    ], postCreateCourse)

// Get a specific course by ID
router.route('/:id')
    .get(getCourseById)
    .patch(updateCourseById)
    .delete(deleteCourseById);

module.exports = router;
