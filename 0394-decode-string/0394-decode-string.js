/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let stack = [];
    let currChar = '';
    let currNum = 0;

    for(let char of s){
        if(!isNaN(char)){
            currNum = currNum * 10 + parseInt(char);
        }else if(char === '['){
            stack.push([currChar, currNum]);
            currChar = '';
            currNum = 0;
        }else if(char === ']'){
            let [prevChar, repeat] = stack.pop();
            currChar = prevChar + currChar.repeat(repeat);
        }else{
            currChar += char
        }
    }

    return currChar
};