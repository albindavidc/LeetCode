/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let totalFinal = [];
    candidates = candidates.sort((a,b) => a-b);

    function backTrack(start, result, totalCandidates){
        if(totalCandidates === target){
            totalFinal.push([...result]);
            return;
        }

        if(totalCandidates > target) return;

        for(let i = start; i<candidates.length; i++){
            if(i > start && candidates[i] === candidates[i-1])continue;

            result.push(candidates[i]);
            backTrack(i+1, result, totalCandidates + candidates[i]);
            result.pop()
        }

    }

    backTrack(0, [], 0);
    return totalFinal
};