/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
    let num = '';
    let oper = '+';
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        if (!isNaN(char) && char !== ' ') {
            num += char;
        }

        if ((isNaN(char) && char !== ' ') || i === s.length -1 ) {
            let n = Number(num);

            switch (oper) {
                case '+': stack.push(n); break;
                case '-': stack.push(-n); break;
                case '*': stack.push(stack.pop() * n); break;
                case '/': stack.push(Math.trunc(stack.pop() / n)); break;
            }
            oper = char;
            num = ''
        }

    }

    return stack.reduce((a, b) => a + b, 0)

};