/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(!s) return '';

    let start = 0;
    let maxLength = 1;

    function expandAroundTheCenter(left, right){
        while(left >=0 && right < s.length && s[left]=== s[right]){
            left--;
            right++;

        }
        return [right - left  - 1, left + 1]
    }

    for(let i =0; i<s.length; i++){
        let [len1, start1] = expandAroundTheCenter(i, i);
        let [len2, start2] = expandAroundTheCenter(i, i+1);

        if(len1 > maxLength){
            maxLength = len1;
            start = start1;
        }

        if(len2 > maxLength){
            maxLength = len2;
            start = start2;
        }
    }

    return s.substring(start, start + maxLength);
};