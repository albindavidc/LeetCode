/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
    let result = [[], []];

    for (let i = 0; i < nums1.length; i++) {
        if (!result[0].includes(nums1[i]) && !nums2.includes(nums1[i])) {

            result[0].push(nums1[i])

        }

    }

    for (let i = 0; i < nums2.length; i++) {

        if (!result[1].includes(nums2[i]) && !nums1.includes(nums2[i])) {
            result[1].push(nums2[i])
        }


    }

    return result
};