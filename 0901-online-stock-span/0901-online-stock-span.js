
var StockSpanner = function() {
    this.result = [];
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    this.result.push(price);
    if(this.result.length < 1) return 1;
    this.count = 1;

    this.n = this.result.length -1

    for(let i = this.result.length-2; i>=0; i--){
        if(this.result[i] <= this.result[this.n]){
            this.count++
            continue;
        }
        break;
    }

    return this.count
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */