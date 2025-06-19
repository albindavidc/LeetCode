/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function(n) {
    let result = 0;

    let newDigit = n.toString();
    for(let i = 0; i <newDigit.length; i++){
        const digit = parseInt(newDigit[i])

        if( i % 2 === 0){
            result += digit
        }else{
            result -= digit
        }
    }

    return result
};