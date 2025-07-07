var TimeLimitedCache = function() {
    this.cache = new Map();
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    let currTime = Date.now();
    let expirationTime = currTime + duration
    
    if(this.cache.has(key)){
        let existing = this.cache.get(key);

        if(existing.expirationTime >= currTime){
            this.cache.set(key, {value, expirationTime})
            return true;
        }
    }

    this.cache.set(key, {value, expirationTime});
    return false;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    let currTime = Date.now();

    if(this.cache.has(key)){
        let existing = this.cache.get(key);

        if(existing.expirationTime >= currTime){
            return existing.value;
        }else{
            this.cache.delete(key)
        }
    }
    return -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    let currTime = Date.now();
    let count = 0;

    for(let [key,entry] of this.cache){
        if(entry.expirationTime >= currTime){
            count++
        }else{
            this.cache.delete(key);
        }
    }

    return count;
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */