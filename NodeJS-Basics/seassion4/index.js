const  http = require('http');
const fs = require('fs');
const port = 5000;



const homePage = fs.readFileSync('./views/index.html', 'utf-8');

const server = http.createServer((req, res) => {
    console.log("=====Req.Url1=====");
    console.log(req.url);
    if (req.url === '/'){
        res.write(homePage);
    }else if (req.url === '/about'){
        res.write("<h1>About Page</h1>");
    }else {
        res.write("<h1>Not Found Page</h1>");
    }

    // res.write(JSON.stringify({ 
    //     id: 1,
    //     name: 'John Doe'
    // }));
    res.end();
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});