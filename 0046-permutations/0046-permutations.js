/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if(nums.length <2) return [nums];
    
    let finalResult = []
    let used = Array(nums).fill(false);

    function backTrack(result){
        if(result.length === nums.length){
            finalResult.push([...result]);
        }

        for(let i=0; i<nums.length; i++){
            if(used[i]) continue;
            used[i] = true;
            result.push(nums[i]);

            backTrack(result)

            result.pop();
            used[i] = false;
        }
    }

    backTrack([]);

    return finalResult
};