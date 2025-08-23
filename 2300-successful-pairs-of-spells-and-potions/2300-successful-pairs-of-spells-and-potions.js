/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
    potions = potions.sort((a,b) => a-b);
    let result = [];
    let m = potions.length;

    function binarySearch(target){
        let left = 0;
        let right = m - 1;

        while(left <= right){
            let midd = Math.floor((left + right)/2);

            if(target > potions[midd]){
                left = midd+1
            }else{
                right = midd-1;
            }
        }

        return left;
    }

    for(let i = 0; i<spells.length; i++){
        let minPotion = Math.ceil(success/spells[i]);
        let index = binarySearch(minPotion);
        result[i] = m - index
    }
    
    return result
};