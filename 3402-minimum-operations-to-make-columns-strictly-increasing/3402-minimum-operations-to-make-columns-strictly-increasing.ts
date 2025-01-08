function minimumOperations(grid: number[][]): number {
    let result:number = 0;

    let row = grid.length
    let colm = grid[0].length
    for(let j=0; j<colm; j++){
        for(let i=1; i<row; i++){
            if(grid[i][j] <= grid[i-1][j]){
                const operations = (grid[i-1][j] - grid[i][j]) +1;
                result += operations
                grid[i][j] +=operations;
            }
        }
    }
    return result;
};