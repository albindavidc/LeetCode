/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length -1;
    let maxHeight =0;

    while(left < right){
        const width = right - left;
        const h = Math.min(height[left], height[right]);

        const newHeight = width * h;
        maxHeight = Math.max(maxHeight, newHeight);

        if(height[left] < height[right]){
            left++
        }else{
            right--
        }
    }
    return maxHeight
};