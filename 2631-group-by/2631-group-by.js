/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    const result = {};

    for(let item of this){
        let key = fn(item);
        if(!result.hasOwnProperty(key)){
            result[key] = []
        }
        result[key].push(item)
    }

    return result
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */