/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let zeroRow = [];
    let zeroCol = [];

    for(let i =0; i<matrix.length; i++){
        for(let j = 0; j<matrix[0].length; j++){
            if(matrix[i][j] === 0){
                zeroRow.push(i);
                zeroCol.push(j);
            }
        }
    }

    for(let i =0; i<matrix.length; i++){
        for(let j =0; j<matrix[0].length;j++){
            if(zeroRow.includes(i) || zeroCol.includes(j)){
                matrix[i][j] = 0;
            }
        }
    }

    return matrix
};