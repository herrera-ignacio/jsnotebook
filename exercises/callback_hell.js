const fs = require('fs');

const data = fs.readFile('app.txt', function(err, data){
	if(err) {
		throw err;
	}
	fs.readFile('app1.txt', function(err, data) {
		if(err) {
			throw err;
		}
	});
});
