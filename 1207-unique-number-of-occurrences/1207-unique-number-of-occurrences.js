/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
    let uniqueVal = new Map();

    for (let num of arr) {
        uniqueVal.set(num, (uniqueVal.get(num) || 0) + 1);

    }

    let result = [];

    for(let [key, value] of uniqueVal){
        if(result.includes(value)){
            return false;
        }else {
            result.push(value)
        }
    }

    return true;
};