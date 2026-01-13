function twoSum(nums, target){
    const numMap = {};

    for(let i=0; i< nums.length; i++){
        const complement = target-nums[i]
        if(complement in numMap & numMap[complement] !==i){
            return [numMap[complement], i];
        }
        numMap[nums[i]] = i;
    }
    return [];
}

const nums = [2,7,10,20];
const target = 30;
const result = twoSum(nums, target);
console.log(result);