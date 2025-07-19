/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
    let result = [];

    for (let i = 0; i < candies.length; i++) {
        let temp = candies[i] + extraCandies
        let bool = false;
        for (let j = 0; j < candies.length; j++) {
            if (temp >= candies[j]) {
                bool = true;
            } else {
                bool = false;
                break;
            }
        }
        result.push(bool)


    }
    return result
};