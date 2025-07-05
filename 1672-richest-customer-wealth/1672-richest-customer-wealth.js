/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let result = [];

    for(let i =0; i<accounts.length; i++){
    let totalJ =0;
        for(let num of accounts[i]){
            totalJ += num
        }
        result.push(totalJ)
    }

    let finalResult = 0
    for(let i = 0; i<result.length; i++){
        if(result[i] > finalResult){
            finalResult = result[i]

        }
    }

    return finalResult
};