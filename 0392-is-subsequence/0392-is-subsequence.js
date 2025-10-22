/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if(s.length === 0 && t.length === 0) return true;

    let sStart = 0;
    let tStart = 0;

    for(let i = 0; i< t.length; i++){
        if(s[sStart] === t[tStart]){
            sStart++;
            tStart++
        }else{
            tStart++;
        }

        if(sStart === s.length){
            return true
        }
    }

    return false;
};