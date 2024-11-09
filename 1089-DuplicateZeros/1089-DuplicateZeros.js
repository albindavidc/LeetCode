/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
    let newArr = [];
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            newArr.push(arr[i]);
        }
        newArr.push(arr[i]);


    }

    for (i = 0; i < arr.length; i++) {
        arr[i] = newArr[i]; 
    }
};