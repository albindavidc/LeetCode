/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let stack = [];
    let parts = path.split('/');

    for(let i = 0; i<parts.length; i++){
        if(parts[i] === '' || parts[i] === '.'){
            continue;
        }else if(parts[i] === '..'){
            stack.pop()
        }else {
            stack.push(parts[i])
        }
    }

    return '/' + stack.join('/')
};