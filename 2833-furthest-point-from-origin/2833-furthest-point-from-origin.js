/**
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function(moves) {
    let left = 0, right = 0, blank = 0;

    for (const ch of moves) {
        if (ch === 'L') left++;
        else if (ch === 'R') right++;
        else blank++;
    }

    return Math.abs(right - left) + blank;
};