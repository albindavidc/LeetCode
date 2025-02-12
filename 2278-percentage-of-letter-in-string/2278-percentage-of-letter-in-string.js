/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function (s, letter) {
    let count = 0;
    let splitted = s.split('')
    for (let i = 0; i <= s.length ; i++) {
        if (splitted[i] === letter) {
            count ++;
        }
    }


    return Math.floor((count / s.length) * 100);
};