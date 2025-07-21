/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
    let char = s.split('')
    let left = 0;
    let right = s.length -1;

    while(left < right){
        while(left < right && !vowels.has(char[left])){
            left++
        }
        while(left < right && !vowels.has(char[right])){
            right--
        }

        [char[left], char[right]] = [char[right], char[left]];
        left++;
        right--;
    }

    return char.join('')
};