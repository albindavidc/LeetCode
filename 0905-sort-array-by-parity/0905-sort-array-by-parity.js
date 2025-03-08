/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let result = [];
    let odds = [];
    for(let i =0; i<=nums.length - 1;i++){
        if(nums[i] %2 === 0){
            result.push(nums[i])
        }else{
            odds.push(nums[i])
        }
    }
    return [...result, ...odds]
};