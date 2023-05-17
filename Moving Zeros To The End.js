/* Write an algorithm that takes an array and moves all of the zeros to the 
end, preserving the order of the other elements. */

function moveZeros(arr) {
	let zerosInArr = 0;
	const resultArray = [];

	for (let i = 0; i < arr.length; i += 1) {
		if (arr[i] === 0) {
			zerosInArr += 1;
		} else {
			resultArray.push(arr[i]);
		}
	}

	for (let i = 0; i < zerosInArr; i += 1) {
		resultArray.push(0);
	}

	return resultArray;
}

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a']));
// [false,1,1,2,1,3,"a",0,0]
console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));
// [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]
