// Purpose: Adds one or more elements to the beginning of an array.

function unshiftFunction (number, ...elements){
      number.unshift(...elements);
      return number;
}

const myNumber = [1, 2, 3, 4, 5];
console.log(unshiftFunction(myNumber, 6, 7, 8, 9, 10)); // [6, 7, 8, 9, 10, 1, 2, 3, 4, 5]
