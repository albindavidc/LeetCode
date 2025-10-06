/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var minFlips = function (a, b, c) {
    let aBit = (a).toString(2).padStart(32, '0').split('');
    let bBit = (b).toString(2).padStart(32, '0').split('');
    let cBit = (c).toString(2).padStart(32, '0').split('');

    let count = 0;

    for (let i = 31; i >= 0; i--) {
        if (cBit[i] === '1') {
            if (bBit[i] === '0' && aBit[i] === '0') count++
        } else {
            if (aBit[i] === '1') count++;
            if (bBit[i] === '1') count++
        }

    }

    return count
};