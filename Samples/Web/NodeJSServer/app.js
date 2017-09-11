// run the web server using:
// $ node app.js

var http = require('http');
var fs = require('fs');

// Change th IP to be accesible from another machine at the local network
//const hostname = '127.0.0.1';
const hostname = '192.168.1.63';
const port = 3000;



const server = http.createServer((req, res) => {
	console.log('Request starting...');
	fs.readFile('./index.html', function (error, content) {
		if (error) {
			res.statusCode = 500;
			res.end();
		}
		else {
			res.statusCode = 200;
			res.setHeader('Content-Type', 'text/html');
			res.end(content);
		}
	})
});

server.listen(port, hostname, () => {
	  console.log(`Server running at http://${hostname}:${port}/`);
	  });
