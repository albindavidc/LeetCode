/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    if(word1.length !== word2.length) return false;

    let freq1 = new Array(26).fill(0);
    let freq2 = new Array(26).fill(0);

    let char1 = new Array(26).fill(false);
    let char2 = new Array(26).fill(false);

    for(let char of word1){
        let inx = char.charCodeAt() - 97
        freq1[inx]++
        char1[inx] = true;
    }

    for(let char of word2){
        let inx = char.charCodeAt() - 97;
        freq2[inx]++;
        char2[inx] = true;
    };

    for(let i = 0; i <26; i++){
        if(char1[i] !== char2[i]){
            return false;
        }
    }

    freq1.sort((a,b) => a-b);
    freq2.sort((a,b) => a-b);

    for(let i  = 0; i<26; i++){
        if(freq1[i] !== freq2[i]){
            return false;
        }
    }

    return true;
};