/* cSpell:disable */
/* Write a generic function chainer that takes a starting value, and an array of functions to execute on it (array of symbols for Ruby).

The input for each function is the output of the previous function (except the 
first function, which takes the starting value as its input). Return the final 
value after execution is complete. */

function add(num) {
	return num + 1;
}

function multiply(num) {
	return num * 30;
}

// chain(2, [add, multiply]);
// returns 90;

function chain(input, fs) {
	let output = input;

	for (let i = 0; i < fs.length; i += 1) {
		output = fs[i](output);
	}

	return output;
}

console.log(chain(2, [add, multiply]));
