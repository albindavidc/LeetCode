/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let left = 0;
    let right = height.length - 1;
    let max = 0;

    while(left < right) {
        const currArea = Math.min(height[left], height[right]) * (right - left);
        max = Math.max(max, currArea)

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }

    }

    return max
};
