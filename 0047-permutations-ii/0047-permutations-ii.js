/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let totalResult = [];
    nums = nums.sort((a,b) => a-b)
    let used = Array(nums.length).fill(false);

    function backTrack(result){
        if(result.length === nums.length){
            totalResult.push([...result]);
            return;
        }

        for(let i = 0; i< nums.length; i++){
            if(used[i]) continue;

            if(i > 0 && nums[i] === nums[i-1] && !used[i-1]) continue;

            used[i] = true;
            result.push(nums[i]);
            backTrack(result);
            result.pop();
            used[i] = false;
        }
    }

    backTrack([]);
    return totalResult
};