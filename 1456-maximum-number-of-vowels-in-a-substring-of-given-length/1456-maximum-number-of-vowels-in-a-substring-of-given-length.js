/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
    let start = '';
    let maxNum = 0;

    let vowels = ['a', 'e', 'i', 'o', 'u']


    for (let i = 0; i < k; i++) {
        start += s[i];
        if (vowels.includes(s[i])) {
            maxNum++;
        }
        if (maxNum === k) {
            return k;
        }
    }

    let max = maxNum

    for (let i = k; i < s.length; i++) {
        start += s[i] - s[i - k];
        if (vowels.includes(s[i - k])) {
            maxNum--;
        }

        if(vowels.includes(s[i])){
            maxNum++
        }

        maxNum > max ? max = maxNum : null;

        if(maxNum === k){
            return k;
        }
    }

    return max

};