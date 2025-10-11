/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowels = ['a','e', 'i', 'o', 'u'];
    s = s.split('');
    let start = 0;
    let end = s.length - 1;

    while(start<end){
        while(start < end && !vowels.includes(s[start].toLowerCase())) start++; 
        while(start < end && !vowels.includes(s[end].toLowerCase())) end--;

        let temp = s[start];
        s[start] = s[end];
        s[end] = temp;
        
        start++;
        end--;
    }

    return s.join('');
};