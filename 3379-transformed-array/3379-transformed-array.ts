function constructTransformedArray(nums: number[]): number[] {
    let n = nums.length;

    let result:number[] = new Array(n);

    for(let i = 0; i< n; i++){
        if(nums[i] > 0){
            let tempRes = (i+ nums[i]) % n
            result[i] = nums[tempRes]
            
        }else if(nums[i] < 0){
            let tempRes = ((i + nums[i]) + n) % n
            result[i] = nums[tempRes]
        }else{
            result[i] = nums[i]
        }
    }

    return result;
};