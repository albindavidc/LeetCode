/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let totalTank = 0;
    let currTank = 0;
    let start = 0;

    for(let i = 0; i<gas.length; i++){
        let diff = gas[i] - cost[i];

        totalTank += diff;
        currTank += diff;

        if(currTank < 0){
            start = i+1;
            currTank = 0;
        }
    }

    return totalTank >= 0 ? start : -1
};