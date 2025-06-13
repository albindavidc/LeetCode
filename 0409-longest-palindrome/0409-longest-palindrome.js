/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let totalLetters = {};
    let totalLength = 0;
    let hasOdd = 0

    for(let char of s){
        totalLetters[char]  = (totalLetters[char] || 0) +1

        if(totalLetters[char] % 2 === 0){
            totalLength +=2;
            hasOdd--
        }else{
            hasOdd++
        }
    }

    return hasOdd > 0? totalLength+1 : totalLength
};