/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let write = 1;

    for(let read = 1; read < nums.length; read++){
        if(nums[read] !== nums[write -1]){
            nums[write] = nums[read];

            write +=1;
        }
    }
    return write
};