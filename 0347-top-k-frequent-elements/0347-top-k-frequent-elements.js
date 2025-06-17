/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {

    let newObj = {};
    for(let num of nums){
        newObj[num] = (newObj[num] || 0) +1;
    }

    let bucket = new Array(nums.length+1).fill(null).map(() => []);
    for(let num in newObj){
        bucket[newObj[num]].push(Number(num))
    }

    let result = [];
    for(let i = bucket.length-1; i >=0 && result.length <k; i--){
        if(bucket[i].length >0){
            result.push(...bucket[i]);
        }
    }

    return result

};