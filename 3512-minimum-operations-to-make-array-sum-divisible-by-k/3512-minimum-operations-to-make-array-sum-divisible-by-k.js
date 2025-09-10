/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    let op = 0;

    while(true){

        let sum = 0;
        let index = 0;
        for(let i = 0; i < nums.length; i++){
            sum += nums[i]
            if(nums[i] > nums[index]) index = i;
        }

        if(sum % k === 0){
            
            return op
        }else{
            nums[index]--;
            op++
        }

    }


};