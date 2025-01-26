function maxAdjacentDistance(nums: number[]): number {
    let result = 0;
    let n = nums.length;

    result = Math.abs(nums[n - 1] - nums[0])

    for(let i =0; i<= nums.length; i++){
        let newResult = Math.abs(nums[i]-nums[i+1])
        if(result < newResult){
            result = newResult;
        }
    }

    return result;
};


// Loop through each element
// check wheather its max. absolute if from difference of first and last number
// check the iteration 