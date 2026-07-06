const express = require('express');
const app = express();
const axios = require('axios');
const morgan = require('morgan');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
console.log(process.env)

//middleware
app.use(cors());
app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({extended: false}));


const apiKey = 'dc83c82ac853e33561499a743896d7fe';

app.get('/', (req, res) => {
      res.json({
        message: "Hi, I am A Live"
    });
});

app.post('/weather', async (req, res) => {
    // Get Weather
    console.log(req.body.city);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${req.body.city}&appid=${process.env.apiKey}`;
    
    try {
        const response = await axios(url);
        res.json({
            status: 'success',
            data: response.data,
            message: 'Data Retrieved Successfully'
        });
    } catch(error){
        console.error(error.message);
        res.json({
            status: "error",
            message: "Error: my city is not found"
        });
    }
});


const port = process.env.port||3000;
app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});