/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    const gr = grid.length;
    const gc = grid[0].length;
    const dirs = [[0, -1], [0, 1], [1, 0], [-1, 0]];

    let fresh = 0;
    let q = [];

    for(let r = 0; r < gr; r++){
        for(let c = 0; c < gc; c++){
            if(grid[r][c] === 2){
                q.push([r,c]);
            }else if(grid[r][c] === 1){
                fresh++;
            }
        }
    }

    let min = 0;

    while(q.length > 0 && fresh >0){
        let size = q.length;
        for(let i = 0; i< size; i++){
            const [r, c] = q.shift();

            for(const [dr, dc] of dirs){
                const nr = dr + r;
                const nc = dc + c;

                if(nr >= 0 && nr < gr && nc >= 0 && nc < gc && grid[nr][nc] === 1){
                    grid[nr][nc] = 2;
                    fresh--;
                    q.push([nr, nc]);

                }
            }
        }

        min++;
    }

    return fresh === 0 ? min : -1
};