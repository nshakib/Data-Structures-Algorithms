const twoSum = (nums, target) =>{
    // loop through each number in the list
    for(let i= 0; i<nums.length; i++){
        //for each number check the rest of the list
        for(let j=i+1; j<nums.length; j++){
            // if the current number and the we are checking add up to the target. return the indexes
            if(nums[i] + nums[j]=== target){
                return [i, j];
            }
        }
    }
    return [];
}

const res = twoSum([2,7,11,15], 9);
const res2 = twoSum([3,2,4], 6);
console.log(res);
console.log(res2);