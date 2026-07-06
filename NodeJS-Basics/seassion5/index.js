const express = require('express');
const app = express();
const { title } = require('node:process');
const port = 3000;

app.use(express.json()); // Middleware to parse JSON request bodies

const coursesRouter = require('./rout/courses_rouut');
app.use('/api/courses', coursesRouter);


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


