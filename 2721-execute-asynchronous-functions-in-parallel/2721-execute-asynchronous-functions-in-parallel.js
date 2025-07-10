/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        let results = new Array(functions.length)
        let count = 0;
        let functionLength = functions.length

        if(functionLength === 0){
            resolve(results)
            return
        }

        functions.forEach((fn, index) => {
            Promise.resolve(fn()).then((result) => {

                results[index] = result
                count++;

                if(functionLength === count){
                    resolve(results);
                }


            }).catch(reject)

        })
    })
    
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */