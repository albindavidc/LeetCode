/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let low = 1;
    let high = Math.max(...piles);

    function canFinish(k){
        let hours = 0;

        for(let pile of piles){
            hours += Math.ceil(pile/k)
        }

        return hours <= h
    }

    while(low < high){
        let midd = Math.floor((low + high)/2);

        if(canFinish(midd)){
            high = midd
        }else{
            low = midd + 1;
        }

    }

    return low
};