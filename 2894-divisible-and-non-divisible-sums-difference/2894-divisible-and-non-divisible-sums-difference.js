/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    let num1 = [];
    let num2 = [];

    for(let i = 1; i<=n; i++){
        if(i % m === 0){
            num2.push(i);
        }

        if(i % m !== 0){
            num1.push(i)
        }
    }

    let num1Result = 0;
    let num2Result = 0;

    for(let num of num1){
        num1Result += num;
    }

    for(let num of num2){
        num2Result += num;
    }

    return num1Result - num2Result


};