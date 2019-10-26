const fs = require('fs');
const http = require('http');
const url = require('url');


/* FILE READING AND WRITING

// Blocking synchronous way
const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');

console.log(textIn);

 const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`;
 fs.writeFileSync('./txt/output.txt', textOut);
 console.log('File written!');

 // Non-blocking
fs.readFile('./txt/start.txt', 'utf-8', (err, data) => {
 console.log(data);
});

 */

//SERVER

const server = http.createServer((req, res) => {

 const pathName = req.url;

 if(pathName === '/' || pathName === '/overview'){
  res.end('This  is the OVERVIEW');
 } else if(pathName === '/product') {
  res.end('This is the PRODUCT');
 }else if(pathName === '/api') {

  fs.readFile(`${__dirname}/dev-data/data.json`, 'utf-8', (err, data) => {
   const productData = JSON.parse(data);
   console.log(productData);
  });

  res.end('API');

 } else {
  res.writeHead(404);
  res.end('Page not found');
 }

});

server.listen(3000, '127.0.0.1', () =>{
 console.log('Listening to requests on port 3000');
});