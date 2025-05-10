/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let result = [1];
    for(let i =1; i<=rowIndex; i++){
        result.push(1);
        for(let j= i - 1; j > 0; j--){
            result[j] = result[j] + result[j-1];
        }
    }

    return result
};