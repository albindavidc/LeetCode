/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    let map = new Map();

    for(let obj of arr1){
        map.set(obj.id, {...obj})
    }

    for(let obj of arr2){
        let existingObj = map.get(obj.id);
        if(existingObj){
            map.set(obj.id, {...existingObj, ...obj})
        }else{
            map.set(obj.id, {...obj})
        }
    }

    let finalResult = Array.from(map.values()).sort((a,b) => a.id - b.id)
    return finalResult

};