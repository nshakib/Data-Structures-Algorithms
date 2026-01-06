// Purpose: Removes the first element from an array.

function shiftFunction (arr){
      arr.shift();
      return arr;
}

const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(myNumber); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log("Shift Function");
shiftFunction(myNumber);
console.log(myNumber); // [2, 3, 4, 5, 6, 7, 8, 9]