/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    class MinHeap{
        constructor(){
            this.heap = [];
        }

        peek(){
            return this.heap[0];
        }

        size(){
            return this.heap.length;
        }

        isEmpty(){
            return this.heap.length === 0;
        }

        push(value){
            this.heap.push(value);
            this.heapifyUp();
        }

        pop(){
            if(this.size() === 1) return this.heap.pop()
            if(!this.isEmpty()){
                let removeEl = this.heap[0];
                this.heap[0] = this.heap.pop();
                this.heapifyDown();
                return removeEl
            }
        }

        heapifyUp(){
            let index = this.heap.length - 1;
            while(index > 0){
                const parent = Math.floor((index-1)/2);
                if(this.heap[parent] <= this.heap[index]) break;

                [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
                index = parent;
            }
        }

        heapifyDown(){
            let index = 0;
            while(true){
                let smallest = index;
                let left = 2 * index + 1;
                let right = 2 * index +2;

                if(left < this.heap.length  && this.heap[left] < this.heap[smallest]) smallest = left;
                if(right < this.heap.length  && this.heap[right] < this.heap[smallest]) smallest = right;

                if(smallest === index) break;

                [this.heap[smallest], this.heap[index]] = [this.heap[index], this.heap[smallest]];
                index = smallest;
            }
        }
    }

    let minHeap = new MinHeap();

    for(let num of nums){
        minHeap.push(num);
        if(minHeap.size() > k){
            minHeap.pop();
        }
    }

    return minHeap.peek()
};