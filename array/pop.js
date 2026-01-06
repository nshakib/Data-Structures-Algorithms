// Purpose: Removes the last element from an array.

const popFunction = (number) => {
      number.pop();
      return number;
}

const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(myNumber); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log("Pop Function");
popFunction(myNumber);
console.log(myNumber); // [1, 2, 3, 4, 5, 6, 7, 8, 9]