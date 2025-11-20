/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    let joinRow = new Map();
    let count = 0;

    for(let row of grid){
        let joining = row.join(',');
        joinRow.set(joining, (joinRow.get(joining) || 0) +1)
    }

    for(let i = 0; i<grid.length; i++){
        let joinCol = [];
        for(let j = 0; j<grid[i].length; j++){
            joinCol.push(grid[j][i])

        }
        
        if(joinCol){
            joinCol = joinCol.join(',')

            if(joinRow.has(joinCol)){
                count+= joinRow.get(joinCol)
            }
        }
    }
   return count 
};