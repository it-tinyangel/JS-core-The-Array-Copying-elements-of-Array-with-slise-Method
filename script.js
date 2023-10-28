// Function for copying an elements of array (cloning an array).
function arrCopy(arr) {
	return arr.slice();
}

// Call the function and write the result in a variable.
const arr1 = arrCopy([1, 2, 3]);
const arr2 = arrCopy([1, 2, 3, [10, 20]]);

// Outputing the result to the console.
console.log(`Copy of arr1:`, arr1);
console.log(`Copy of arr2:`, arr2);
