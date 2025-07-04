/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    let cache = new Map();
    let callCount = 0;

    return function(...args) {
        let key = JSON.stringify(args)
        if(cache.has(key)){
            return cache.get(key);
        }else{
            callCount++
            let result = fn(...args);
            cache.set(key, result);
            return cache.get(key);
        }
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */