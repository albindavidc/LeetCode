/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    let numSet = new Set(nums);
    let maxVal = -1

    for(let num of nums){
        if(num > 0 && numSet.has(-num)){
            if(num > maxVal){
                maxVal = num
            }
        }
    }

    return maxVal
};