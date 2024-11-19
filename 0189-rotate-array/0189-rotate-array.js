/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {

    k = k % nums.length
    if(k === 0) return nums;

    let part1 = nums.slice(-k);
    let part2 = nums.slice(0, nums.length - k);
    let rotatedResult = part1.concat(part2);

    for(let i =0; i<nums.length; i++){
        nums[i] = rotatedResult[i]
    }

};