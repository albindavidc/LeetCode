/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    const n = cost.length;
    let result = new Array(n);

    result[0] = cost[0];
    result[1] = cost[1];

    for(let i = 2; i<n; i++){
        result[i] = cost[i] + Math.min(result[i-1], result[i-2]) 
    }

    return Math.min(result[n-1], result[n-2])
};