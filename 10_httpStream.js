var trumpet = require('trumpet');
var through = require('through2');
var tr = trumpet();

process.stdin.pipe(tr);
tr.selectAll('.loud', function(elem) {
	elem.createStream().pipe(through(function(buf, enc, next) {
		this.push(buf.toString().toUpperCase() + '\n');
		next();
	})).pipe(process.stdout);
});
