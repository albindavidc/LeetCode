/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let index = 0;
    let i = 0;

    while(i < chars.length){
        const currChar = chars[i]
        let count = 0;

        while(i<chars.length && currChar === chars[i]){
            i++
            count++;
        }

        chars[index++] = currChar;

        if(count > 1){
            for(let digit of count.toString()){
                chars[index++] = digit;
            }
        }
    }

    return index
};