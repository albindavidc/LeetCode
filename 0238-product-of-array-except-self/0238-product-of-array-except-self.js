/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const n = nums.length;
    let result = Array(n).fill(1);

    let prefix = 1;
    for(let i = 0 ;i<n; i++){
        result[i] = prefix;
        prefix *= nums[i];
    }

    let sufix = 1;
    for(let i = n-1; i>=0; i--){
        result[i] *= sufix;
        sufix *= nums[i]
    }

    return result
};