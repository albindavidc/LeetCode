/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a,b) => a[1] - b[1])

    let count = 0;
    let endVal = -Infinity;

    for(let [start, end] of intervals){
        if(start >=  endVal){
            count++;
            endVal = end;
        }
    }

    return intervals.length - count;
};