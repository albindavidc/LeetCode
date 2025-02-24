function findMaxConsecutiveOnes(nums: number[]): number {
    let consecutive = 0;
    let currCount = 0;

    for(let i =0; i<nums.length; i++){
        if(nums[i]  === 1){
            currCount++;
            consecutive = Math.max(consecutive, currCount);
        }else{
            currCount = 0
        }
    }
    return consecutive;

};