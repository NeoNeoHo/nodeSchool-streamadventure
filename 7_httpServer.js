var http = require('http');
var fs = require('fs');
var through = require('through2');

var write2Upper = function write2Upper(buf, encoding, next) {
	this.push(buf.toString().toUpperCase());
	next();
};

var end = function end(done) {
	done();
};

var server = http.createServer(function(req, res) {
	if (req.method === 'POST') {
		req.pipe(through(write2Upper))
			.pipe(res);
	}
	else res.end('beep boop\n');
});

server.listen(parseInt(process.argv[2]));