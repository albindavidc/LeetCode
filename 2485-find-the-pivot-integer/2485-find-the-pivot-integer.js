/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
    let sum = [1]

    for(let i = 2; i<=n; i++){
        sum.push(sum[i-2] + i)
    }

    let total = sum[n-1];

    for(let i = sum.length -1; i >= 0; i--){

        let leftsum = sum[i];
        let rightsum = total - leftsum + (i+1)

        if(leftsum === rightsum){
            return i+1
        }
    }

    return -1
};