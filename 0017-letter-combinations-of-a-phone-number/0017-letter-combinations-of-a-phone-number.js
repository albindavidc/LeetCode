/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(digits.length === 0) return []
    
    let combinations = {
        2:['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z'],
    }

    let result = [];

    function backTrack(index, path){
        if(index === digits.length){
            result.push(path);
            return;
        } 

        for(let char of combinations[digits[index]]){
            backTrack(index+1, path + char)
        }
    }

    backTrack(0, '');
    return result

    return result
};