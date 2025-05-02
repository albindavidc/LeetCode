/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    let segments = 0;
    let isSegmented = false;

    for(let char of s){
        if(char !== ' '){
            if(!isSegmented){
                segments++;
                isSegmented = true;
            }
        }else{
            isSegmented = false;
        }
    }

    return segments
};