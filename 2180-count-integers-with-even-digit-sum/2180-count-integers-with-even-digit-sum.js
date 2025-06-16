/**
 * @param {number} num
 * @return {number}
 */
var countEven = function(num) {

    let count = 0; 

    for(let i = 1; i<=num; i++){
        let sum = 0;
        let n = i;

        while(n >0){
            sum += n % 10;
            n = Math.floor(n/10);
        }
        if(sum % 2 === 0) count++;
    }

    return count
    
};