/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s = s.split(' ')
    let result = []

    for(let i = s.length - 1; i>=0; i--){
        if(s[i] !== ''){
            result.push(s[i] )
        }
    }

    return result.join(' ')
};