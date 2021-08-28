const http = require('http');

const port = 8080;

const hostname = 'localhost';

const server = http.createServer((req,res) => {


});

server.listen(port,hostname, ()=>{
    console.log('Server is running at this port', port)
});