/**
 * @param {number} num1
 * @param {number} num2
 * @param {number} num3
 * @return {number}
 */
var generateKey = function (num1, num2, num3) {
    let padded = '';
    num1 = String(num1).padStart(4, "0");
    num2 = String(num2).padStart(4, "0");
    num3 = String(num3).padStart(4, "0");

    for(let i = 0; i<4; i++){
        let smaller = num1[i]
        if(num2[i] < num1[i]){
            smaller = num2[i]
        };

        if(num3[i] < smaller){
            smaller = num3[i]
        }

        padded += smaller.toString()
    }

    return Number(padded)

};