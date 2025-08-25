/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let left = 0;
    let right = nums.length -1;

    while(left < right){
        let midd = Math.floor((left + right)/2);

        if(nums[midd] < nums[midd+1]){
            left = midd+1;
        }else{
            right = midd;
        }
    }
    
    return left
    
};