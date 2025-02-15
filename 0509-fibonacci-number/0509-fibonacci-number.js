/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n===0) return 0;
    if(n===1) return 1;

    let prev1 = 0;
    let prev2 = 1;

    for(let i =2; i<=n; i++){
        let curr = prev1 + prev2;
        prev1 = prev2;
        prev2 = curr;
    }
    return prev2
};