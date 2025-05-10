/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for(let price of prices){
        minPrice = Math.min(minPrice, price);

        maxProfit = Math.max(maxProfit, price - minPrice)
    }

    return maxProfit
};