function lastStoneWeight(stones: number[]): number {
    stones.sort((a,b) => a-b);

    while(stones.length > 1){
        let y:number = stones.pop();
        let x:number = stones.pop();

        if(x !== y){
            stones.push(y-x);

            stones.sort((x,y) => x - y);
        }
    }
    return stones.length > 0 ? stones[0] : 0;
};