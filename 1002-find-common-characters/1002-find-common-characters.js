/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    let store = new Array(26).fill(Infinity);

    for(let word of words){
        let temp = new Array(26).fill(0);

        for(let char of word){
            temp[char.charCodeAt(0) - 97]++
        }
        for(let i =0 ; i<26;i++){
            store[i] = Math.min(store[i], temp[i])
        }

    }

    let result = [];
    for(let i = 0; i< store.length; i++){
        while(store[i] > 0){
            result.push(String.fromCharCode(i+97))
            store[i]--
        }
    }

    return result
};