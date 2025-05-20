/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let longestStr = new Set();
    let left = 0;
    let maxLength = 0;
    
    for(let right=0; right<s.length; right++){
        while(longestStr.has(s[right])){
            longestStr.delete(s[left]);
            left++;
        }

        longestStr.add(s[right]);
        maxLength = Math.max(maxLength, right - left +1)
    }

    return maxLength
};