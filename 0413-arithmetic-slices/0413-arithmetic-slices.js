/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function(nums) {
    if(nums.length < 3) return 0;

    let count = 0;
    let curr = 0;

    for(let i = 2; i<nums.length; i++){
        if(nums[i]-nums[i-1] === nums[i-1] - nums[i-2]){
            curr++;
            count+=curr
        }else{
            curr = 0;
        }
    }

    return count
};