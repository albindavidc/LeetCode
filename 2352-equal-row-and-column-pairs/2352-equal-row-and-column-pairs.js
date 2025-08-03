/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    let countRow = new Map();
    let count = 0;

    for(let row of grid){
        let joining = row.join(',')
        countRow.set(joining, (countRow.get(joining) || 0) + 1);
    }

    for(let i = 0; i<grid.length; i++){
        let column = [];

        for(let j = 0; j< grid.length; j++){
            column.push(grid[j][i]);
        }

        if(column){
            column = column.join(',')
            if(countRow.has(column)){
                count += countRow.get(column)
            }
        } 
    }

    return count
};