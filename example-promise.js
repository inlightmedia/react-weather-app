function addPromise (a, b) {
	return new Promise(function(resolve, reject){
		if (typeof a !== 'number' || typeof b !== 'number') {
			reject('You have passed in a non-number!')
		} else {
			resolve(a+b);
		}


	});
}

addPromise('l','m').then(function (sum) {
	console.log('Your answer is: ' + sum);
}, function (e) {
	console.log('Error: ' + e);
});
