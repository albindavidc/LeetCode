/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    if(word === word.toUpperCase()){
        return true;
    }

    if(word === word.toLowerCase()){
        return true;
    }

    if(word[0] === word[0].toUpperCase() && word.slice(1) === word.slice(1).toLowerCase()){
        return true;
    }

    return false;
};