/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const totalResult = [];

    function backTrack(start, result){
        if(result.length === k){
            totalResult.push([...result]);
            return;
     
        }

        for(let i = start; i<=n; i++){
            result.push(i);
            backTrack(i+1, result);
            result.pop()
        }
    }

    return totalResult
};