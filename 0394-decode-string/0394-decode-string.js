/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let stack = [];
    let currString = '';
    let currNum = 0;

    for(let char of s){
        if(!isNaN(char)){
            currNum = currNum *10 + parseInt(char);
        }else if(char === '['){
            stack.push([currString, currNum]);
            currString = '';
            currNum = 0;
        }else if(char === ']'){
            let [prevString, repeat] = stack.pop();
            currString = prevString +  currString.repeat(repeat);
        }else{
            currString += char;
        }
    }

    return currString
};