// Import courses data -->/Dtata/courses.js
let { courses } = require('../Data/courses');

const {validationResult} = require('express-validator');


const getAllCourse = (req, res) => {
    res.json(courses);
}


const getCourseById = (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).json({ message: 'Course not found' });
    res.json(course);
}

const postCreateCourse =  (req, res) => {
    const course = {id: courses.length + 1, ...req.body};
    courses.push(course);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array()});
    }

    
    res.status(201).json(course);
};

const updateCourseById = (req, res) => {
    let course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).json({ message: 'Course not found' });
    course = { ...course, ...req.body };
    res.status(200).json(course);
};

const deleteCourseById = (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).json({ message: 'Course not found' });
    courses = courses.filter(c => c.id !== parseInt(req.params.id));
    res.json({ message: 'Course deleted' });
};

module.exports = {
    getAllCourse,
    getCourseById,
    postCreateCourse,
    updateCourseById,
    deleteCourseById
}