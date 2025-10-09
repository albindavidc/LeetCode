/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let finalResult = []

    candidates = candidates.sort((a,b) => a-b)

    function backTrack(start, result, total){
        if(total === target){
            finalResult.push([...result])
            return;
        }

        if(total > target) return

        for(let i = start; i<candidates.length; i++){
            if(i > start && candidates[i] === candidates[i-1]) continue;

            result.push(candidates[i])
            backTrack(i+1, result, total+candidates[i]);
            result.pop()
        }
    }

    backTrack(0, [], 0);

    return finalResult
};