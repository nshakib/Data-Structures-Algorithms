// Purpose: Returns a shallow copy of a portion of an array.
// The index to start extraction (inclusive
// endIndex: The index to end extraction (exclusive).

function sliceFunction (arr, start, end){
      return arr.slice(start, end);
}

const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(myNumber); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log("Slice Function");
console.log(sliceFunction(myNumber, 2, 5)); // [3, 4, 5]
