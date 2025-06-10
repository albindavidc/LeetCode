/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    let stack = [];
    let newSet = new Set();
    let lastLett = {};
    
    for(let i =0 ;i<s.length; i++){
        lastLett[s[i]] = i
    }

    for(let i =0; i<s.length; i++){
        let char = s[i]

        if(newSet.has(s[i])) continue;

        while(stack.length >0 && s[i] < stack[stack.length -1] && i < lastLett[stack[stack.length -1]]){
            newSet.delete(stack.pop())
        }
        stack.push(char)
        newSet.add(char)
    }

    return stack.join('')
};