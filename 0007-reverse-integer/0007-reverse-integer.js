/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let result =0;
    let isNegative = x < 0;
    let maxInt = Math.pow(2, 31)-1
    x = Math.abs(x)

    while(x>0){
        let lastDigit = x%10;
        result = result*10 + lastDigit
        x = Math.floor(x/10);

        if(result > maxInt){
            return 0
        }
    }

    return isNegative ? -result : result;

};