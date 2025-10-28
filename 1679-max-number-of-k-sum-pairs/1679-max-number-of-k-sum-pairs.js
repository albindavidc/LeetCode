/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    nums = nums.sort((a,b) => a-b);
    let start = 0; end = nums.length -1;
    let op = 0;

    while (start < end){
        let sum = nums[start] + nums[end];
        if(sum===k){
            op++
            start++;
            end--;
        }else if(sum < k){
            start++
        }else{
            end--
        }
    }

    return op
};