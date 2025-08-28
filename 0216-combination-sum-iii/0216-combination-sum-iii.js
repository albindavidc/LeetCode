/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    let result = [];

    function findComb(start, remain, path){
        if(path.length === k && remain === 0){
            return result.push([...path])
        }

        if(path.length > k || remain < 0) return;

        for(let i = start; i <=9 ; i++){
            path.push(i)
            findComb(i+1, remain-i, path);
            path.pop()
        }

    }

    findComb(1, n, [])

    return result
};