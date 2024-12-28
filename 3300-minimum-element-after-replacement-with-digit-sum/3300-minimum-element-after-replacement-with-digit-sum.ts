function minElement(nums: number[]): number {

    const digitSum = (dig: number): number => {
        let sum = 0;

        while (dig > 0) {
            sum += dig % 10;
            dig = Math.floor(dig / 10);
        }
        return sum;
    }

    for (let i = 0; i < nums.length; i++) {
        nums[i] = digitSum(nums[i])
    }


    let sorted = nums.sort((a, b) => a - b);

    return sorted[0];
};