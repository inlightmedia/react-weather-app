var names = ['bill', 'jim', 'bob'];


names.forEach(function(name){
	console.log('forEach: ', name);
});

names.forEach((name) => {
	console.log('arrowFunc: ', name);
});


var Person = {
	name: 'Josh',
	greet: function(){
		names.forEach(function(name){
			// The 'this' keyword here points to nothing because the function makes a new this keyword
			console.log(this.name, 'says hi to', name);
		});
	},
	arrowGreet: function(){
		// With arrow functions 'this' refers to the parents this instance.
		// It seems that methods (such as arrowGreet) don't make their own 'this' just functions
		names.forEach((name) => console.log(this.name, 'says hi to', name));
	}
}

Person.greet();
Person.arrowGreet();

// Challenge Area

function add(a, b) {
	return a + b;
}
console.log('Function: ', add(9,1));

var addStatement = (a, b) => {
	console.log('Arrow Statement', a + b);
}
addStatement(9,1);

var addExpression = (a, b) => console.log('Arrow Expression', a + b);
addExpression(9,1);
