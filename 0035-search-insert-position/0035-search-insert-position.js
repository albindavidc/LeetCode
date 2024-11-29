/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while(left <= right){
        let midd = Math.floor((left + right)/2);

        if(nums[midd] === target){
            return midd;
        } else if(nums[midd] < target){
            left = midd + 1;
        } else{
            right = midd - 1
        }
    }
    return left
};