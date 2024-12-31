function countValidSelections(nums: number[]): number {
    let n = nums.length;
    let validSelections = 0;

    const canAllBecomeZero = (start: number, direction: number): boolean => {
        let numsCopy = [...nums]
        let position = start;

        while (position >= 0 && position < n) {
            if (numsCopy[position] === 0) {
                position += direction;
            } else {
                numsCopy[position] -= 1;
                direction *= -1;
                position += direction;
            }
        }

        return numsCopy.every(val => val === 0)
    }


    for (let curr = 0; curr < n; curr++) {
        if (nums[curr] === 0) {
            if (canAllBecomeZero(curr, -1)) validSelections++;
            if (canAllBecomeZero(curr, 1)) validSelections++;
        }

    }
    return validSelections;

};