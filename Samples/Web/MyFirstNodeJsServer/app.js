// run the web server using:
// $ node app.js

const http = require('http');

// Change th IP to be accesible from another machine at the local network
//const hostname = '127.0.0.1';
const hostname = '192.168.1.63';
const port = 3000;

const server = http.createServer((req, res) => {
	  res.statusCode = 200;
	  res.setHeader('Content-Type', 'text/plain');
	  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
	  console.log(`Server running at http://${hostname}:${port}/`);
	  });
