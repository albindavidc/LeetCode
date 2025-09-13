/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    let n = prices.length;
    let inHandCash = 0;
    let stockHold = -prices[0];

    for(let i = 1; i<n; i++){
        inHandCash = Math.max(inHandCash, stockHold + prices[i] - fee);
        stockHold = Math.max(stockHold, inHandCash - prices[i])
    }

    return inHandCash
};