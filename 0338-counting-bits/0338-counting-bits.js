/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
    let result = [0];

    for (let i = 1; i <= n; i++) {
        let binary = (i).toString(2)
        let sum = 0;
        for (let num = 0; num < binary.length; num++) {
            if (binary[num] == 1) {
                sum++;
            }
        }
        result.push(sum);
    }

    return result

};