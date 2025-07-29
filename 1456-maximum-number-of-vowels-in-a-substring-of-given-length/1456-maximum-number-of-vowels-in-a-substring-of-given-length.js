/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let vowels = ['a','e', 'i', 'o', 'u'];
    let count = 0;

    for(let i = 0; i<k; i++){
        if(vowels.includes(s[i])){
            count++;
        }
    }

    let maxCount = count;

    for(let i = k;i<s.length; i++){
        if(vowels.includes(s[i])){
            count++
        }
        if (vowels.includes(s[i-k])){
            count--
        }
        maxCount = Math.max(maxCount, count);

        if(maxCount === k) return maxCount
    }
    return maxCount
};