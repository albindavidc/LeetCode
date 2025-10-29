/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums.sort((a,b) => a-b)
    let result = [];

    function backTrack(start, arr){
        result.push([...arr])

        for(let i = start; i<nums.length;i++){
            if(i > start && nums[i] === nums[i-1]) continue;
            arr.push(nums[i]);

            backTrack(i+1, arr);

            arr.pop()
        }
    }

    backTrack(0, []);

    return result
};