/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let map = new Map();

    for(let num of arr){
        map.set(num, (map.get(num)|| 0)+1);
    }

    let frequencyCounts = Array.from(map.values())
    let uniqueSet = new Set(frequencyCounts)

    return uniqueSet.size === map.size
};