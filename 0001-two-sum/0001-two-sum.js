/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let newMap = new Map();
    for(let i =0; i<nums.length; i++){
        const complement = target - nums[i]
        if(newMap.has(complement)){
            return [newMap.get(complement), i]
        }
        newMap.set(nums[i], i)
    }
    return []
};