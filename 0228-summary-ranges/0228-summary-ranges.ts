function summaryRanges(nums: number[]): string[] {
    let result: string[] = [];
    let start = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i === nums.length - 1 || nums[i + 1] !== nums[i] + 1) {
            if (start === i) {
                result.push(`${nums[start]}`)
            } else {
                result.push(`${nums[start]}->${nums[i]}`)
            }
        start =  i + 1;
        }
    }
    return result;
};




// Loop through each input
// Give the range of the adjacent numbers
// the output should be with arrow sign