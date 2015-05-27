var http = require('http');
var fs = require('fs');
var through = require('through2');

var write = function write(buf, encoding, next) {
	this.push(buf.toString().toUpperCase());
	next();
};

var server = http.createServer(function(req, res) {
	if (req.method === 'POST') {
		req.pipe(through());
	}
	res.end('beep boop\n');
});

server.listen(process.argv[2]);