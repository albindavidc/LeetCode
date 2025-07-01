/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let elSum = 0;
    let digSum = 0;

    for(let i =0; i<nums.length; i++){
        elSum += nums[i]
    }

    let newNum = nums.join('').split('')
    for(let num of newNum){
        digSum += parseInt(num);
    }

    return Math.abs(elSum - digSum)

};