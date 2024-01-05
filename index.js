/* 
code to host any server on his port 

const http = require('http')
const fs =require('fs')
const filContent = fs.readFileSync('index.html')


const server = http.createServer((req, res) => {

  res.writeHead(200,{ 'Content-Type':'text/html'});
  res.end(filContent)
})

server.listen(80,'127.0.0.1', () => {
  console.log("Listening on port 80 ")
  

}); */
/* making custome backend  to active the page so that on click it will openn some
specific ting an on clicking randome things it will not support the and display 404 
error code */


const http = require('http');
const fs =require('fs');


const hostname = '127.0.0.1';
const port = 3000;

const index = fs.readFileSync('./index.html')
const Home = fs.readFileSync("./index.html")
const about = fs.readFileSync("./about.html")
const contact = fs.readFileSync("./contact.html")



const server = http.createServer((req, res) => {
  console.log(req.url)
   url = req.url;


res.statusCode = 200 ; 
  res.setHeader('Content-Type', 'text/html');

  if (url == '/') {
    res.end(index);
  }
  else if (url == '/about') {
    res.end(about);
  } 

  else if (url == '/contact') {
    res.end(contact);
  }
  else  {

    res.statusCode = 404 ;
    res.end(" <h1> 404 not found  <h1>");
  }


});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
