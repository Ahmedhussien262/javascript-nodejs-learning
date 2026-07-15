
const Course = require('../models/courses_module');
const asyncWrapper = require('../middlewere/asyncWrapper');

const {validationResult} = require('express-validator');

const  httpStatusText = require('../utils/httpStatusText');

const AppError = require('../utils/appError');


const getAllCourse = async (req, res) => {
const query = req.query;
    const limit = query.limit || 10;
    const page = query.page || 1;
    const skip = (page - 1) * limit;
    //get all courses from the database
    const courses = await Course.find({},{"__v":false}).limit(limit).skip(skip);

    res.json({ status: httpStatusText.SUCCESS, data: { courses } });
}

const getCourseById = asyncWrapper(
    async (req, res, next) => {
    const course = await Course.findById(req.params.id,{"__v":false});
    if (!course){ 
        const error = AppError.create('Course not found', 404, httpStatusText.FAILED);
        return next(error);
    }
    res.json({ status: httpStatusText.SUCCESS, data: { course } });
    
}
)

const postCreateCourse = asyncWrapper(
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const error = AppError.create('Course not found', 404, httpStatusText.FAILED);
        return next(error);
        }
        const course = new Course(req.body);
await course.save();
res.status(201).json({ status: httpStatusText.SUCCESS, data: { course } });

});

const updateCourseById = asyncWrapper(
    async (req, res, next) => {
        const course = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!course) {
            const error = AppError.create('Course not found', 404, httpStatusText.FAILED);
        return next(error);
        }
        res.status(200).json({ status: httpStatusText.SUCCESS, data: { course } });
    }
);

const deleteCourseById = asyncWrapper(
    async (req, res, next) => {
        const course = await Course.findByIdAndDelete(req.params.id);
        if (!course) {
            const error = AppError.create('Course not found', 404, httpStatusText.FAILED);
        return next(error);
        }
        res.status(200).json({ status: httpStatusText.SUCCESS, data: { message: 'Course deleted' } });
});

module.exports = {
    getAllCourse,
    getCourseById,
    postCreateCourse,
    updateCourseById,
    deleteCourseById
}