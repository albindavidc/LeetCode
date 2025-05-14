/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums = nums.sort((a,b) => a-b);

    let n = nums.length;

    let result = [];

    for(let i =0; i<n-2; i++){
        if(i > 0 && nums[i] === nums[i-1]) continue;

        if(nums[i] > 0) break;

        let left = i +1;
        let right = n -1;

        while(left < right){
            let sum = nums[i] + nums[left] + nums[right];

            if(sum < 0){
                left++;
            }else if(sum> 0){
                right--;
            }else{
                result.push([nums[i], nums[left], nums[right]])

                while(left < right && nums[left] === nums[left+1]) left++;
                while(left < right && nums[right] === nums[right -1]) right++;

                left++;
                right--
            }
        }
    }

    return result
};