// Purpose: Adds one or more elements to the end of an array.

function pushFunction (number, ...elements){
      number.push(...elements);
      return number;
}

const myNumber = [1, 2, 3, 4, 5];
console.log(pushFunction(myNumber, 6, 7, 8, 9, 10)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]



