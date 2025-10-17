/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s = s.trim().split(/\s+/);
    let result = [];

    for(let i = s.length -1; i >= 0; i--){
        result.push(s[i]);
    }

    return result.join(' ')
};