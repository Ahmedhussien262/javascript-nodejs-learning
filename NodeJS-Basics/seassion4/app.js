const express = require('express');
const app = express();
const portExpress = 3000;

// app.use(express.static('./views'));
app.use((req, res, next) => {
    console.log(`METHOD: ${req.method} URL: ${req.url}`);
    next();
});

app.get('/', (req, res) => {
    res.send('Welcome From Express!');
});
app.get('/about', (req, res) => {
    res.send('About Page');
});
app.get('/products', (req, res) => {
   res.send([
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 }
   ])
});
app.listen(portExpress, () => {
    console.log(`Express server running at http://localhost:${portExpress}/`);
});