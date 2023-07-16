const http = require('http');  

const hostname = '127.0.0.1'; // hostname for application
const port =  8080;        // port to run assign

//code for create server
const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    res.end('Test Appplication');                  // message
});

server.listen(port,hostname,()=>{
    console.log(`Server runs at http://${hostname}:${port}/`);
});