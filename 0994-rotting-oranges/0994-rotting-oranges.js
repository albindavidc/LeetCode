/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    const gr = grid.length;
    const gc = grid[0].length;
    const dirs = [[0, -1], [0, 1], [-1, 0], [1, 0]];

    let fresh = 0;
    let q = []


    for (let i = 0; i < gr; i++) {
        for (let j = 0; j < gc; j++) {
            if (grid[i][j] === 2) {
                q.push([i, j])
            } else if (grid[i][j] === 1) {
                fresh++;
            }
        }
    }

    let min = 0


    while (q.length > 0 && fresh > 0) {
        let size = q.length;
        for (let i = 0; i < size; i++) {

            const [r, c] = q.shift();

            for (let [dr, dc] of dirs) {
                const nr = dr + r;
                const nc = dc + c;

                if (nr >= 0 && nr < gr && nc >= 0 && nc < gc && grid[nr][nc] === 1) {
                    grid[nr][nc] = 2;
                    fresh--
                    q.push([nr, nc])
                }

            }
        }
        min++
    }

    return fresh === 0 ? min : -1
};