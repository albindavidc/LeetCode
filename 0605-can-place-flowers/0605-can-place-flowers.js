/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    for(let i = 0; i<flowerbed.length && n >=0; i++){
        if(flowerbed[i] === 0){
            let prev = i === 0 ? 0 : flowerbed[i-1]
            let next = i === flowerbed.length - 1 ? 0 : flowerbed[i+1]

            if(prev === 0 && next === 0){
                flowerbed[i] = 1;
                n--
            }
        }
    }

    return n <= 0
};