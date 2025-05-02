/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
    let n = s.length;

    for (let len = 1; len <= n / 2; len++) {

        if (n % len === 0) {

            let newSubString = s.substring(0, len);
            let isRepeated = true;

            for (let i = len; i < n; i = i+len) {
                if (s.substring(i, i + len) !== newSubString) {
                    isRepeated = false;
                    break;
                }

            }

            if (isRepeated === true) {
                return true;
            }

        }
    }

    return false;
};