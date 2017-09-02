// run the web server using:
// $ node app2.js

const http = require('http');

// Change th IP to be accesible from another machine at the local network
//const hostname = '127.0.0.1';
const hostname = '192.168.1.63';
const port = 3003;

var fs = require('fs');
var index = fs.readFileSync('VideoTest.html');


const server = http.createServer((req, res) => {
	  res.statusCode = 200;
	  res.setHeader('Content-Type', 'text/html');
	  res.end(index);
});

server.listen(port, hostname, () => {
	  console.log(`Server running at http://${hostname}:${port}/`);
	  });
