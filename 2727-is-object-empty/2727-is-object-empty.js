/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    if(JSON.stringify(obj).length <= 2) return true;
    else return false
};