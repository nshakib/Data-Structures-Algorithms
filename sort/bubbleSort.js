//what is bubble sort & how it works
//bubble sort is a sorting algorithm
//bubble sort is a comparison based algorithm

function bubbleSort(arr){
    for(let i=arr.length-1; i>0; i--){
        for(let j=0; j<i; j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

const myArr = [4,2,6,5,1,3];
bubbleSort(myArr);
console.log(myArr);
