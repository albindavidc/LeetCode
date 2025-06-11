
var MyHashSet = function() {
    this.bucketSize = 1000;
    this.bucket = new Array(this.bucketSize).fill(null).map(() => []);
    
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    let index = key % this.bucketSize;
    if(!this.bucket[index].includes(key)){
        this.bucket[index].push(key);
    }
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    let index = key % this.bucketSize;
    let bucketIndex = this.bucket[index].indexOf(key);
    if(bucketIndex !== -1){
        this.bucket[index].splice(bucketIndex,1);
    }
};

/** 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    let index = key % this.bucketSize;

    return this.bucket[index].includes(key);
};

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */