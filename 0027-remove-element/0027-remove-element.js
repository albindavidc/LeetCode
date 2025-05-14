/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let write = 0;

    for(let read = 0; read<nums.length; read++){
        if(nums[read] !== val){
            nums[write] = nums[read];

            write += 1;
        }
    }

    return write
};