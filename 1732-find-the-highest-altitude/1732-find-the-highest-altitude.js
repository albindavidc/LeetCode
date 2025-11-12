/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let newAlt = [0];

    for(let i = 0; i<gain.length; i++){
        newAlt[i+1] = newAlt[i] + gain[i]
    }

    return Math.max(...newAlt)
};