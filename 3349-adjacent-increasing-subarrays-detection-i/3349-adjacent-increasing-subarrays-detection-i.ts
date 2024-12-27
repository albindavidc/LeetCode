function hasIncreasingSubarrays(nums: number[], k: number): boolean {
    if( nums.length < 2*k){
        return false;
    }


    const helperFunction = (start: number):boolean =>{
        for(let i = start; i< start + k - 1; i++){
            if(nums[i] >= nums[i+1]){
                return false;
            }
        }
    }

    for(let j =0; j<= nums.length - 2 * k ; j++){
        let n = j + k;
        if(helperFunction(j) && helperFunction(n)){
            return true;
        }
    }

    return false;
};