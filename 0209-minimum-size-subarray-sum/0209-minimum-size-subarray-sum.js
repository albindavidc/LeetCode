/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    

    let sum = [0];

    for(let i = 0; i<nums.length;i++){
        sum[i+1] = sum[i] + nums[i]
    }

    let minLength = Infinity;

    for(let i = 0; i<nums.length; i++){
        let required = sum[i] + target
        let left = i+1; right = nums.length;

        while(left <= right){
            let midd = Math.floor((left+right)/2);

            if(sum[midd] >= required){
                minLength = Math.min(minLength, midd-i)
                right = midd - 1
            }else{
                left = midd + 1
            }
        }
    }

    return minLength === Infinity ? 0 : minLength
};