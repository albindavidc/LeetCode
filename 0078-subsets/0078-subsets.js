/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {

    let result = [];

    function backTrack(start, curr) {
        result.push([...curr])

        for (let i = start; i < nums.length; i++) {
            curr.push(nums[i]);

            backTrack(i + 1, curr);

            curr.pop();
        }
    }
    backTrack(0, [])

    return result
};