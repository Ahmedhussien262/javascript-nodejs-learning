const crypto = require("crypto");

process.env.UV_THREADPOOL_SIZE = 5;

const start = performance.now();


crypto.pbkdf2("secret", "salt", 100000, 64, "sha512", (err, derivedKey) => {
  if (err) throw err;
  console.log("Time taken:", performance.now() - start, "ms");
});

crypto.pbkdf2("secret", "salt", 100000, 64, "sha512", (err, derivedKey) => {
  if (err) throw err;
  console.log("Time taken:", performance.now() - start, "ms");
});

crypto.pbkdf2("secret", "salt", 100000, 64, "sha512", (err, derivedKey) => {
  if (err) throw err;
  console.log("Time taken:", performance.now() - start, "ms");
});

crypto.pbkdf2("secret", "salt", 100000, 64, "sha512", (err, derivedKey) => {
  if (err) throw err;
  console.log("Time taken:", performance.now() - start, "ms");
});

crypto.pbkdf2("secret", "salt", 100000, 64, "sha512", (err, derivedKey) => {
  if (err) throw err;
  console.log("Time taken:", performance.now() - start, "ms");
});


fetch("https://dummyjson.com/products").then(() => {
    console.log("Fetch completed" , performance.now() - start, "ms");
})
fetch("https://dummyjson.com/products").then(() => {
    console.log("Fetch completed" , performance.now() - start, "ms");
})
fetch("https://dummyjson.com/products").then(() => {
    console.log("Fetch completed" , performance.now() - start, "ms");
})
fetch("https://dummyjson.com/products").then(() => {
    console.log("Fetch completed" , performance.now() - start, "ms");
})
fetch("https://dummyjson.com/products").then(() => {
    console.log("Fetch completed" , performance.now() - start, "ms");
})
fetch("https://dummyjson.com/products").then(() => {
    console.log("Fetch completed" , performance.now() - start, "ms");
})
fetch("https://dummyjson.com/products").then(() => {
    console.log("Fetch completed" , performance.now() - start, "ms");
})

const data = fs.readFileSync("file.txt", "utf-8");
console.log(data);

fs.readFile("file.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
  
  } else {
    console.log(data);  
  }
});



const http = require("http");


const server = http.createServer((req, res) => {
    console.log("Received request:", req.url);
    if (req.url === "/") {
        res.end("home bage")
    }else if (req.url === "/about") {
        res.end("about page")
    } else {
        res.statusCode = 404;
        res.end("Page not found");
    }
    res.end("Hello, World!");
});

server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});

