/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let currAltitude = 0;
    let heighestAltitude = 0;


    for(let curr of gain){
        currAltitude += curr;
        heighestAltitude = Math.max(currAltitude, heighestAltitude);
    }

    return heighestAltitude


};