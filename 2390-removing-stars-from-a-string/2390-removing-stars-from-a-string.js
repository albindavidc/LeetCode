/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    let result = [];

    for(let char of s){
        if(char === '*'){
            result.pop()
        }else{
            result.push(char)
        }
    }

    return result.join('')
};