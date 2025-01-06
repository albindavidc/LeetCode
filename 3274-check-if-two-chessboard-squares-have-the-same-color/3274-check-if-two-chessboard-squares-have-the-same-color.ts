function checkTwoChessboards(coordinate1: string, coordinate2: string): boolean {

    function newFun(coordinate: string): string {

        let row = coordinate[0].toLowerCase().charCodeAt(0) - 96;
        let column = parseInt(coordinate[1]);

        if ((row + column) % 2 === 0) {
            return 'black'
        } else {
            return 'white'
        }

    }

    let cordiFirst = newFun(coordinate1);
    let cordiSecond = newFun(coordinate2);




    return cordiFirst === cordiSecond

};


// define 2 variables for colours
// loop through the coordinates to find the rows and columns
// if else statement to find if its black or white