/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    if(obj === null || typeof obj !== 'object'){
        return obj
    }

    if(Array.isArray(obj)){
        let compactedArr = [];
        for(let val of obj){
            let newArr = compactObject(val);

            if(Boolean(newArr)){
                compactedArr[compactedArr.length] = newArr
            }
        }
        return compactedArr
    }

    let compactedObj = {};
    for(let key in obj){
        let valObj = compactObject(obj[key]);
        if(Boolean(valObj)){
            compactedObj[key] = valObj
        }
    }
    return compactedObj
};