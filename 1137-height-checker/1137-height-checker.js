/**
 * @param {number[]} heights
 * @return {number}
 */
/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let heightlength = heights.length;
    let expected = heights.slice().sort((a,b) => a-b);

    let count = 0;

    for(i=0; i< heightlength; i++){
        if(heights[i] != expected[i]){
            count ++;
        };
    };

    return count;
};