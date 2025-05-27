/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows === 1 || numRows> s.length ) return s
    let zigzag = Array(numRows).fill('');

    let row = 0, step = 1;
    for(let char of s){
        zigzag[row] += char;

        if(row === 0) step = 1;
        if(row === numRows -1) step = -1;

        row += step
    }
    return zigzag.join('')
    
};