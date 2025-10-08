/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
    if (str1 + str2 !== str2 + str1) return ""

    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);

    const gcdLen = gcd(str1.length, str2.length)
    return str1.slice(0,gcdLen);
};