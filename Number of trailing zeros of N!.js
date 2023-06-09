/* Write a program that will calculate the number of trailing zeros in a 
factorial of a given number.

N! = 1 * 2 * 3 *  ... * N

Be careful 1000! has 2568 digits...

For more info, see: http://mathworld.wolfram.com/Factorial.html

Examples
zeros(6) = 1
# 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero

zeros(12) = 2
# 12! = 479001600 --> 2 trailing zeros
Hint: You're not meant to calculate the factorial. Find another way to find 
the number of zeros. */

function zeros(n) {
	const upperLimit = Math.floor(Math.log(n) / Math.log(5));
	let zerosCount = 0;
	for (let lowerLimit = 1; lowerLimit <= upperLimit; lowerLimit += 1) {
		zerosCount += Math.floor(n / 5 ** lowerLimit);
	}
	return zerosCount;
}

console.log(zeros(0)); // 0
console.log(zeros(5)); // 1
console.log(zeros(6)); // 1
console.log(zeros(30)); // 7
console.log(zeros(20)); // 4
console.log(zeros(333044047)); // 83261005
