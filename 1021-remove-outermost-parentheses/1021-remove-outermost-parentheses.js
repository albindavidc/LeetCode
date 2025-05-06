/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
    let result = '';
    let count = 0;

    for (let char of s) {

        if (char === '(') {
            if (count > 0) {
                result += char;

            }
            count++;
        } else if (char === ')') {
            count--
            if (count > 0) {
                result += char
            }
        }
    }
    return result
};