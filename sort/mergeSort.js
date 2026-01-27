//what is merge sort & how it works
//merge sort is a divide and conquer algorithm
//merge sort is a comparison based algorithm

// merge sort function
function mergeSort(arr){
    if(arr.length <= 1) return arr;

    const middle = Math.floor(arr.length/2);
    const left = arr.slice(0,middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right){
    const result = [];

    let i =0;
    let j= 0;

    while(i<left.length && j  < right.length){
        if(left[i] < right[j]){
            result.push(left[i])
            i++;
        }else{
            result.push(right[j]);
            j++;
        }
    }
    result.push(...left.slice(i));
    result.push(...right.slice(j));
    return result;
}

const unsortedArray = [5,4,3,2,1,180,10];
const sortedArray = mergeSort(unsortedArray);
console.log(sortedArray);