class MinHeap{
    constructor(){
        this.heap = [];
    }

    isEmpty(){return this.heap.length === 0}
    size(){return this.heap.length};
    peek(){return this.heap[0]};
    check(val){return this.heap.includes(val)}

    push(val){
        this.heap.push(val);
        this.heapifyUp();
    }

    pop(){
        if(this.heap.length === 0) return null;
        if(this.heap.length === 1) return this.heap.pop();
        const smallest = this.heap[0];
        this.heap[0] = this.heap.pop()
        this.heapifyDown();
        return smallest;
    }

    heapifyUp(){
        let index = this.heap.length -1;

        while(index > 0){
            let parent = Math.floor((index -1)/2);

            if( this.heap[parent] <= this.heap[index])break;

            [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
            index = parent;
        }
    }

    heapifyDown(){
        let index = 0;

        while(true){
            let smallest = index;
            const left = 2*index +1;
            const right = 2* index +2;

            if(left < this.heap.length && this.heap[left]< this.heap[smallest]){
                smallest = left;
            }
            if(right < this.heap.length && this.heap[right]< this.heap[smallest]){
                smallest = right;
            }

            if(smallest === index) break;
            [this.heap[smallest], this.heap[index]] = [this.heap[index], this.heap[smallest]];
            index = smallest;
        }
    }

}


var SmallestInfiniteSet = function() {
    this.curr = 1;
    this.heap = new MinHeap();
    this.addedSet = new Set();
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function() {
    const smallestInHeap = this.heap.peek();

    if(smallestInHeap < this.curr && smallestInHeap !== null){
        this.heap.pop();
        this.addedSet.delete(smallestInHeap);
        return smallestInHeap;
    }

    let smallest = this.curr;
    this.curr++;
    return smallest;
};

/** 
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function(num) {
    if(num < this.curr && !this.addedSet.has(num)){
        this.heap.push(num);
        this.addedSet.add(num)
    }
};

/** 
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */