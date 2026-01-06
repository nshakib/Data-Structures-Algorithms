// Purpose: Adds or removes elements from an array in place.

function spliceFunction (number, start, deleteCount, ...elements){
      number.splice(start, deleteCount, ...elements);
      return number;
}