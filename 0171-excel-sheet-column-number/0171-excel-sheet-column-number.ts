function titleToNumber(columnTitle: string): number {
    let result = 0;

    for(let i =0; i<columnTitle.length; i++){
        result = result * 26 + (columnTitle[i].charCodeAt(0) - 64);
    }

    return result;
};