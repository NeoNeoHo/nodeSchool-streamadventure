var trumpet = require('trumpet');
var through = require('through2');
var tr = trumpet();


// var loud = tr.selectAll('.loud', function(elem) {
// 	elem.createStream().pipe(through(function(buf, enc, next) {
// 		this.push(buf.toString().toUpperCase() + '\n');
// 		next();
// 	})).pipe(elem);
// });
// process.stdin.pipe(tr).pipe(process.stdout);

var loud = tr.select('.loud').createStream();
loud.pipe(through(function (buf, _, next) {
  this.push(buf.toString().toUpperCase());
  next();
})).pipe(loud);

process.stdin.pipe(tr).pipe(process.stdout);