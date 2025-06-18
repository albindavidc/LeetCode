/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let even = [];
    let odd = [];

    for(let i =0; i<nums.length; i++){
        if(i % 2 === 0){
            even.push(nums[i])
        }else{
            odd.push(nums[i])
        }
    }

    let evenTotal = even.reduce((acc,curr) => acc + curr, 0);
    let oddTotal = odd.reduce((acc, curr) => acc + curr, 0);

    return evenTotal > oddTotal ? evenTotal : oddTotal
};