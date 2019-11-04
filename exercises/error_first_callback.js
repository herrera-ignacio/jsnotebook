const myCallback = (err, data) => {
	if(err) {
		throw err;
	}
	console.log('Callback succeeded')
};

const usingItNow = (callback) => {
	// error first callback
	callback(new Error('error occurred'), 'got it');
};

usingItNow(myCallback());
