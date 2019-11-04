let obj = new Promise(function(resolve, reject) {
	setTimeout(function(){resolve('Then')}, 2000);
	reject('Catch');
});

obj
	.then((res) => console.log(res))
	.catch((err) => console.log(err));

async function wait(ms) {
	return new Promise(resolve => {
		setTimeout(resolve, ms);
	});
}

(async function(msg) {
	await wait(2000);
	console.log(`After 2 seconds: ${msg}`)
})('Success');
