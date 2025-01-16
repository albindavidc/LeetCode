/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let newSorted = nums.sort((a,b) => a-b)

    for(let i = 0; i<nums.length; i++){
        if(newSorted[i] === newSorted[i+1]){
            return true;
        }
    }
    
    return false;
};