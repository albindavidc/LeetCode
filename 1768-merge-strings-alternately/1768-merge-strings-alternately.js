/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let result = ''
    let i = 0;

    while(word1.length > i|| word2.length > i){
        if(word1.length > i) result += word1[i];
        if(word2.length > i) result += word2[i];
        i++
    }

    return result
    
};