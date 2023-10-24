// Function for copy of the array.
function arrCopy(arr) {
	return arr.slice();
}

// Creating copies of the arrays and output them to the console.
const arr1 = arrCopy([1, 2, 3]);
const arr2 = arrCopy([1, 2, 3, [10, 20]]);

console.log(`Copy of arr1:`, arr1);
console.log(`Copy of arr2:`, arr2);