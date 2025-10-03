/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    points = points.sort((a,b) => a[1] - b[1])
    let mainEnd = points[0][1];
    let arrow = 1;

    for(let [start, end] of points){
        if(start < mainEnd) continue;
        else if(start > mainEnd){
            mainEnd = end;
            arrow++;
        }
    }

    return arrow
};