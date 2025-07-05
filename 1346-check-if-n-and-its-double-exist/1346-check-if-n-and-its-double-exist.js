/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    let result = new Set();

    for(let num of arr){
        if(result.has(num*2) || (num % 2 === 0 && result.has(num/2))){
            return true;
        }
        result.add(num)
    }

    return false;
};