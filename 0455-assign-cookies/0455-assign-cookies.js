/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b)

    let content = 0;

    let i = 0;
    let j = 0;

    while (i < g.length && j < s.length) {
        if (g[i] <= s[j]) {
            content++
            i++;
        }

        j++;
    }

    return content
};