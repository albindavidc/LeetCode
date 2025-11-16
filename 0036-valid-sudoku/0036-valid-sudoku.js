/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {

    for (let i = 0; i < 9; i++) {

        let rowFreq = new Map();
        let colFreq = new Map();
        let boxFreq = new Map();

        for (let j = 0; j < 9; j++) {

            let rowVal = board[i][j]
            if (rowVal !== '.') {
                rowFreq.set(rowVal, (rowFreq.get(rowVal) || 0) + 1)
                if (rowFreq.get(rowVal) > 1) return false;
            }

            let colVal = board[j][i];
            if (colVal !== '.') {
                colFreq.set(colVal, (colFreq.get(colVal) || 0) + 1);
                if (colFreq.get(colVal) > 1) return false;

            }

            let boxRow = 3 * Math.floor(i / 3) + Math.floor(j / 3);
            let boxCol = 3 * (i % 3) + (j % 3);
            let boxVal = board[boxRow][boxCol]
            if (boxVal !== '.') {
                boxFreq.set(boxVal, (boxFreq.get(boxVal) || 0) + 1);
                if (boxFreq.get(boxVal) > 1) return false;
            }
        }
    }

    return true;
};