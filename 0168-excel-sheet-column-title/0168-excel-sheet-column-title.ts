function convertToTitle(columnNumber: number): string {
    let outputResult = '';

    while (columnNumber > 0) {

        columnNumber--;

        const result = (columnNumber % 26) + 65;
        outputResult = String.fromCharCode(result) + outputResult;
        columnNumber = Math.floor(columnNumber / 26);
    }

    return outputResult
};