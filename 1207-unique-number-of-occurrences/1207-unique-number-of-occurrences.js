/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let newMap = new Map();

    for(let num of arr){
        newMap.set(num, (newMap.get(num) || 0) + 1);
    }

    let newValue = new Set()

    for(let [key,value] of newMap){
        if(newValue.has(value)){
            return false;
        }
        newValue.add(value)
    }

    return true
};