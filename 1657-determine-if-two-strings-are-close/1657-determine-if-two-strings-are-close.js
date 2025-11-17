/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    if(word1.length !== word2.length) return false;

    let freq1 = new Map();
    let freq2 = new Map();

    for(let i = 0; i<word1.length; i++){
        freq1.set(word1[i], (freq1.get(word1[i]) || 0) + 1);
        freq2.set(word2[i], (freq2.get(word2[i]) || 0) + 1);

    }

    for(let char of freq1.keys()){
        if(!freq2.has(char)) return false;
    }

    let count1 = Array.from(freq1.values()).sort()
    let count2 = Array.from(freq2.values()).sort()

    for(let i=0; i<count1.length; i++){
        if(count1[i] !== count2[i]) return false;
    }

    return true
};