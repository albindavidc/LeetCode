/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let jumps = 0;
    let currJump = 0;
    let farthest = 0;

    for(let i =0; i<nums.length - 1; i++){
        farthest = Math.max(farthest, i + nums[i]);

        if(i === currJump){
            jumps++;
            currJump = farthest;

            if(currJump >= nums.length -1){
                break;
            }
        }
    }
    return jumps;
};