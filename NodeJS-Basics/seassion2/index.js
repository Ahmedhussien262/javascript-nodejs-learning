const fs = require('node:fs');
const { json } = require('node:stream/consumers');

//read file
// const fileContent = fs.readFileSync('./hello.txt', 'utf-8');
// console.log(`data: ${fileContent}`);

// fs.readFile('./hello.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.error(` Error reading file: ${err}`);
//     }
//     console.log(`File content ==> ${data}`);
// });

// // write file
// fs.writeFile('./users.json', JSON.stringify([{ id: 1, name: 'Ahmed' }, { id: 2, name: 'Ali' }]), 'utf-8', (err) => {
//     if (err) {
//         console.error(`Error writing file: ${err}`);
//     }
//     console.log('File written successfully'); 
// });

//delete file
// fs.unlink('./users.json', (err) => {
//     if (err) {
//         console.error(`Error deleting file: ${err}`);
//     }
//     console.log('File deleted successfully');
// });


//Steams [radable, writable]

// const rStream = fs.createReadStream('./hello.txt', 'utf-8');
// const wrStream = fs.createWriteStream('./stream.txt', 'utf-8');

// rStream.on('data', (chunk) => {
//     console.log(`Chunk: ${chunk}`);
//     wrStream.write("\n =======Chunk End ======= \n");
//     wrStream.write(chunk);
// });

const  _ = require('lodash');
