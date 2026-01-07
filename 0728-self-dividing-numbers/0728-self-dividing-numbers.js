/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let result = [];


    for(let i =left; i<=right; i++){
        let num = i.toString();
        let selfDiv = ''

        for(let j = 0; j<num.length; j++){
            if(num[j] !== 0 && Number(i) % Number(num[j]) === 0){
                selfDiv+=num[j];
            }
        }

        if(num.length === selfDiv.length){
            result.push(Number(selfDiv))
        }
    }

    return result
};