/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let sum = 0;

    let bit = n.toString(2).split('').map(Number);

    for(let i = 0; i<bit.length;i++){
        if(bit[i] === 1){
            sum++
        }
    }

    return sum
};