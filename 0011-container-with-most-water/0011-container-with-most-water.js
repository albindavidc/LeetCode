/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length -1;
    let result = 0;

    while(left <= right){
        let sum = Math.min(height[left], height[right]) * (right - left)
        if(sum > result) result = sum;

        if(height[left] < height[right]){
            left++
        }else{
            right--
        }
    }

    return result
};