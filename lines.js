var through = require('through2');
var split = require('split');

var counter = 0;

var write = function write(buf, encoding, next) {
	counter += 1;
	var str = buf.toString();
	this.push(counter % 2 === 0 
		? str.toUpperCase() + '\n'
		: str.toLowerCase() + '\n');
	next();
};

process.stdin
	.pipe(split())
	.pipe(through(write))
	.pipe(process.stdout);