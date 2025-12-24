/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.prefix = [0];

    for(let i = 0; i<nums.length; i++){
        this.prefix[i+1] = this.prefix[i] + nums[i]
    }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    return this.prefix[right+1] - this.prefix[left]
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */