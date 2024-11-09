/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = strs[0];
    let i = -1;
    while (!strs.every(str => str.startsWith(prefix)) && prefix !== "")
        prefix = prefix.slice(0, -1);
    return prefix;
};