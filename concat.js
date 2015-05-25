var concat = require('concat-stream');

process.stdin
	.pipe(concat(function(bur) {
		var result = bur.toString().split('').reverse().join('');
		console.log(result);
	}));