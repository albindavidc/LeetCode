/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
    let checking = new Map();
    for(let i =0; i<s.length; i++){
        if(checking.has(s[i])){
            checking.set(s[i], (checking.get(s[i]) || 0) + 1);
        }else{
            checking.set(s[i], 1)
        }
    }

    let firstVal = checking.get(s[0])

    for(let [key, value] of checking){
        if(value != firstVal){
            return false;
        }
    }
    return true;
};