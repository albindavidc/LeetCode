/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let result = '';
    let i = 0;

    let maxLength = word1.length > word2.length ? word1.length : word2.length;

    while(i < maxLength){
        if(i < word1.length) result += word1[i];
        if(i < word2.length) result += word2[i];
        i++
    }

    return result;
};