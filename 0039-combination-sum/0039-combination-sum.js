/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let result = [];

    function backtrackingFn(start, path, remaining){
        if(remaining === 0){
            result.push([...path])
            return
        }

        for(let i = start; i < candidates.length; i++){
            if(candidates[i] > remaining) continue;

            path.push(candidates[i])
            backtrackingFn(i, path, remaining - candidates[i]);
            path.pop()
        }
    }

    backtrackingFn(0, [], target)
    return result
};