/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function(maze, entrance) {
    const m = maze.length;
    const n = maze[0].length;
    const [sr, sc] = entrance;
    const dirs = [[-1, 0], [1,0], [0, -1], [0, 1]];

    maze[sr][sc] = '+';

    let q  = [[sr, sc, 0]];

    while(q.length >0){
        const [r, c, d] = q.shift();

        for(const [dr, dc] of dirs){
            const nr = r + dr;
            const nc = c + dc;

            if(nr >=0 && nr < m && nc >= 0 && nc < n && maze[nr][nc] === '.'){
                if(nr === 0 || nr === m-1 || nc === 0 || nc === n-1){
                    return d+1;
                }
                
                maze[nr][nc] = '+';
                q.push([nr, nc, d+1])
            }
        }
    }

    return -1
};