/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    if (!nums) return null
    return majorityElementRec(nums, 0, nums.length - 1);
};

function majorityElementRec(arr, start, end) {
    if (start === end) {
        return arr[start]
    }


    let mid = Math.floor((start + end) / 2);
    let leftMajority = majorityElementRec(arr, start, mid);
    let rightMajority = majorityElementRec(arr, mid + 1, end);

    if (leftMajority === rightMajority) {
        return leftMajority;
    }

    let leftCount = countInRange(arr, leftMajority, start, end);
    let rightCount = countInRange(arr, rightMajority, start, end);

    return leftCount > rightCount ? leftMajority : rightMajority;
}

function countInRange(arr, nums, start, end) {
    let count = 0;
    for (let i = start; i <= end; i++) {
        if (arr[i] === nums) {
            count++;
        }
    }
    return count;
}
