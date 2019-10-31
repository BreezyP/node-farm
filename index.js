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

const tempOverview = fs.readFileSync(`${__dirname}/templates/overview.html`, 'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/templates/product.html`, 'utf-8');
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8');




const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {

 const pathName = req.url;

 //OVERVIEW

 if(pathName === '/' || pathName === '/overview'){

  res.writeHead('200', {'Content-type': 'text/html'});
  res.end(tempOverview);

  //PRODUCT PAGE
 } else if(pathName === '/product') {
  res.end('This is the PRODUCT');

  //API
 }else if(pathName === '/api') {

  res.writeHead(200, {'Content-type': 'application/json'});
  res.end(data);


  //404 NOT FOUND
 } else {
  res.writeHead(404);
  res.end('Page not found');
 }

});

server.listen(3000, '127.0.0.1', () =>{
 console.log('Listening to requests on port 3000');
});