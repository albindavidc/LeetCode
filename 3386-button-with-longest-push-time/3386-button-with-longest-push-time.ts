function buttonWithLongestTime(events: number[][]): number {
    let result = new Map<number, number>();

    result.set(events[0][0], events[0][1])

    for (let i = 1; i < events.length; i++) {
        let temp1 = events[i][0]
        let temp2 = events[i][1] - events[i - 1][1]
        result.set(temp1, Math.max(result.get(temp1) || 0, temp2))
    }


    let maxIndex = -1;
    let maxTime = 0;

    for (let [index, time] of result.entries()) {
        if (time > maxTime || (time === maxTime && index < maxIndex)) {
            maxIndex = index
            maxTime = time
        }
    }

    return maxIndex
};