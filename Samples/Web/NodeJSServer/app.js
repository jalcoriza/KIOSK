// run the web server using:
// $ node app.js

var http = require('http');
var path = require('path');
var fs = require('fs');

// Change th IP to be accesible from another machine at the local network
//const hostname = '127.0.0.1';
const hostname = '192.168.1.63';
const port = 3000;

const server = http.createServer((req, res) => {
	console.log('Request starting...');
	console.log('url = ' + req.url);
	var filePath = '.' + req.url;
	if (filePath == './')
		filePath = './index.html';

	var extname = path.extname(filePath);
	var contentType = 'text/html';
	switch (extname) {
		case '.js':
			contentType = 'text/javascript';
			break;
		case '.css':
			contentType = 'text/css';
			break;
	}
	console.log('Content Type =' + contentType);



	if (fs.existsSync(filePath)) {
		console.log('File exits');
		fs.readFile(filePath, function (error, content) {
			if (error) {
				console.log('Error reading the file');
				res.statusCode = 500;
				res.end();
			}
			else {
				res.statusCode = 200;
				res.setHeader('Content-Type', contentType);
				res.end(content);
			}
		});
	}
	else {
		console.log('File does not exit');
		res.statusCode = 404;
		res.end();
	};
});

server.listen(port, hostname, () => {
	  console.log(`Server running at http://${hostname}:${port}/`);
	  });
