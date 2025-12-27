/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    

    for(let i = 0; i<numbers.length; i++){
        let num1 = numbers[i];

        for(let j = i+1; j<numbers.length; j++){
            let num2 = numbers[j];

            if(num1 + num2 === target){
                return [i+1, j+1]
            }
        }
    }
};