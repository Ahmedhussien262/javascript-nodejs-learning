require('dotenv').config({ path: './utils/.env' });
const cors = require('cors');
const  httpStatusText = require('./utils/httpStatusText');
const express = require('express');
const app = express();
const { title } = require('node:process');
const dns = require('dns');
dns.setServers(["8.8.8.8", "1.1.1.1"]);
const port = process.env.PORT ;

const mongoose = require('mongoose');

const url = process.env.MONGO_URL ;

mongoose.connect(url).then(() => {
    console.log("Connected to MongoDB");

});

app.use(cors());

app.use(express.json()); // Middleware to parse JSON request bodies

const coursesRouter = require('./rout/courses_rouut');
app.use('/api/courses', coursesRouter);

// glopal  middleware for not found router
app.all(/.*/, (req, res) => {
    res.status(404).json({
        status: httpStatusText.ERROR,
        data: { message: 'Route not found' }
    });
});

// glopal  middleware for error handling
app.use((error, req, res, next) => {
    res.status(error.statusCode || 500).json({
        status: error.statusText || httpStatusText.ERROR,
        data: { message: error.message },
        code: error.statusCode || 500,
        datat: null
    });
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


