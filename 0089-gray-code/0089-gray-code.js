/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    let result = [];
    let total = 1 << n;

    for(let i = 0; i<total; i++){
        result.push(i ^ (i >> 1))
    }

    return result
};