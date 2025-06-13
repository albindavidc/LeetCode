/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    let ans = [];

    for (let i = 0; i < nums1.length; i++) {

        let found = false;
        let index = nums2.indexOf(nums1[i])

        for (let j = index + 1; j < nums2.length; j++) {
            if(nums2[j] > nums1[i]){
                ans.push(nums2[j])
                found = true;
                break
            }
        }

        if(!found){
            ans.push(-1)
        }
    }

    return ans

    return ans
};