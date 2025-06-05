/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let transform = '^#' + s.split('').join('#') + '#$';
    let n = transform.length;

    let P = new Array(n).fill(0);
    let center = 0;
    let right = 0;

    for(let i =1; i<n -1; i++){

        if(i< right){
            let mirror = 2 * center -i;
            P[i] = Math.min(P[mirror], right -i);
        }

        while(transform[i+1+P[i]] === transform[i-1-P[i]]){
            P[i]++;
        }

        if(i + P[i]> right){
            center = i;
            right = i+ P[i];
        }
    }

    let maxLength = Math.max(...P)
    let index = P.indexOf(maxLength);
    
    let start = Math.floor((index - maxLength) /2);
    return s.slice(start,start+ maxLength)
};