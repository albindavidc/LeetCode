/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0) return false;

    let str = x.toString();
    let palindrome = str.split('').reverse('').join('');

    if(palindrome == str){
        return true;
    }else{
        return false;
    }
    
};