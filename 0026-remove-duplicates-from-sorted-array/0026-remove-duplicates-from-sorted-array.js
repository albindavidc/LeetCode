/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let newArr = [...new Set(nums)];

    for(let i =0; i<newArr.length; i++){
        nums[i] = newArr[i]
    }
    return newArr.length
};