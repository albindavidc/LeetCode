/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
    
    let i = 0;
    let j = 0;
    while(i<nums1.length  && j < nums2.length ){
        if(nums1[i] === nums2[j]){
            return nums1[i]
        }else if(nums2[j] > nums1[i]){
            i++
        }else{
            j++
        }
    }

    return -1
};