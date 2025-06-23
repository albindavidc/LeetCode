/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {    
    let totalOp = 0;

    while(true){
        let smallestNonZero = Infinity;

        for(let j =0; j< nums.length; j++){
            if(nums[j] !== 0 && nums[j] < smallestNonZero){
                smallestNonZero = nums[j]
            }
        }

        if(smallestNonZero === Infinity) break;

        for(let j = 0; j< nums.length; j++){
            if(nums[j] > 0){
            nums[j] = nums[j] - smallestNonZero

            }
        }

        totalOp += 1
    }


    return totalOp
};