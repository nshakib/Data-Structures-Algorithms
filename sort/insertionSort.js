//what is insertion sort & how it works
//

function insertionSort(arr){
    for(let i = 1; i<arr.length; i++){
        let key = arr[i]; //current element
        let j = i-1; //previous element
        
        //compare key with each element on the left of it and insert it at the correct position
        while( j>= 0 && arr[j] > key){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = key;
    }
    return arr;
}

const unsortedArr = [4,2,6,5,1,3];
const sortedArr = insertionSort(unsortedArr);
console.log(sortedArr);