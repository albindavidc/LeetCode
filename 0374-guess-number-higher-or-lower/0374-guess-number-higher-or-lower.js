/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let left = 1;
    let right = n;

    while(left <= right){
        let midd = Math.floor(left + (right - left)/2);
        let res = guess(midd);

        if(res === 0) return midd;
        else if(res === -1){
            right = midd -1;
        }else if(res === 1){
            left = midd +1;
        }
    }
};