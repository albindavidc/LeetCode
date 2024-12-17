function containsNearbyDuplicate(nums: number[], k: number): boolean {
    let result = new Set<number>();

    for(let i =0; i<nums.length; i++){
        if(result.has(nums[i])) return true;
        result.add(nums[i])
        if(result.size > k){
            result.delete(nums[i-k])
        }
    }
    return false;
};