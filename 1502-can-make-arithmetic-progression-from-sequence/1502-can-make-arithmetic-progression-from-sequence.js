/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    if(arr.length < 1) return false; 
    let result = arr.sort((a,b) => a-b)
    let val = result[1] - result[0]

    for(let i = 1; i<result.length-1; i++){
        if(result[i+1] - result[i] !== val){
            return false
        }
    }
    return true;
};