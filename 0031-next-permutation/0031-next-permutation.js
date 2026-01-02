/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
    let i = nums.length - 2;
    let j = nums.length - 1;

    while (i >= 0 && nums[i] >= nums[i+1]) {
        i--
    }

    if (i >= 0) {
        while (nums[j] <= nums[i]) {
            j--
        }

        [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }

    return nums
};