/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    let newSet = new Set(candyType);

   return Math.min(candyType.length/2, newSet.size)
};