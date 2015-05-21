var through = require('through2');

var write = function write(buf, encoding, next) {
	this.push(buf.toString().toUpperCase());
	next();
};

process.stdin.pipe(through(write)).pipe(process.stdout);
