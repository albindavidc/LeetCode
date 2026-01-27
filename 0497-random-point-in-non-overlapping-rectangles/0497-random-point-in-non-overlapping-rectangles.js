/**
 * @param {number[][]} rects
 */
var Solution = function(rects) {
    this.rects = rects
    this.prefix = [];
    this.total = 0;

    for(let [a,b, x,y] of this.rects){
        let points = (x-a +1) * (y-b +1);
        this.total += points;
        this.prefix.push(this.total);
    }    
};

/**
 * @return {number[]}
 */
Solution.prototype.pick = function() {
    let k = Math.floor(Math.random() * this.total) + 1;

    let left = 0; 
    let right = this.prefix.length - 1
    while(left < right){
        let mid = Math.floor((left + right)/2);

        if(this.prefix[mid] < k){
            left = mid +1;
        }else{
            right = mid;
        }
    }

    let [a,b, x,y] = this.rects[left];

    let px = Math.floor(Math.random() * (x-a +1)) + a
    let py = Math.floor(Math.random() * (y-b +1)) +b;

    return [px, py]
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(rects)
 * var param_1 = obj.pick()
 */