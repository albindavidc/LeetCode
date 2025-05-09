/**
 * @param {number[][]} tasks
 * @return {number[]}
 */
var getOrder = function(tasks) {
    let indexedTime = tasks.map((task, index) => [...task, index])
    indexedTime.sort((a,b) => a[0] - b[0])

    let result = [];
    let availableTasks = new MinMap();
    let currentTime = 0;
    let i = 0;

    while(i < indexedTime.length || !availableTasks.isEmpty()){
        if(i < indexedTime.length && availableTasks.isEmpty() && currentTime < indexedTime[i][0]){
            currentTime = indexedTime[i][0]
        }

        while(i < indexedTime.length && indexedTime[i][0] <= currentTime){
            availableTasks.insert([indexedTime[i][1], indexedTime[i][2], indexedTime[i][0]])
            i++
        }

        if(!availableTasks.isEmpty()){
            const [processingTime, originalIndex] = availableTasks.extractMin();
            result.push(originalIndex);
            currentTime += processingTime;

        }
    }

    return result;


};

class MinMap{
    constructor(){
        this.heap = [];
    }

    isEmpty(){
        return this.heap.length === 0;
    }

    insert(value){
        this.heap.push(value);
        this.bubbleUp();
    }

    extractMin(){
        if(this.isEmpty()){
            return null;
        }

        let min = this.heap[0];
        let last = this.heap.pop();

        if(!this.isEmpty()){
            this.heap[0] = last;
            this.sinkDown(0);
        }
        return min;
    }

    bubbleUp(){
        let index = this.heap.length - 1;
        let element = this.heap[index];

        while(index > 0){
            let parentIndex = Math.floor((index-1) /2);
            let parent = this.heap[parentIndex];

            if(element[0] > parent[0] || (element[0] === parent[0] && element[1] > parent[1])){
                break;
            }

            this.heap[parentIndex] = element;
            this.heap[index] = parent;
            index = parentIndex;
        }
    }

    sinkDown(index){
        let length = this.heap.length;
        let element = this.heap[index];

        while(true){
            let leftChildIn = 2 * index + 1;
            let rightChildIn = 2 * index + 2;
            let swapIndex = null;

            if(leftChildIn < length){
                let leftChildEl = this.heap[leftChildIn];
                if(leftChildEl[0] < element[0] || (leftChildEl[0] === element[0] && leftChildEl[1] < element[1])){
                    swapIndex = leftChildIn
                }
            }

            if(rightChildIn < length){
                let rightChildEl = this.heap[rightChildIn];
                if((swapIndex === null && (rightChildEl[0] < element[0] || (rightChildEl[0] === element[0] && rightChildEl[1] < element[1]))) || (swapIndex !== null && (rightChildEl[0] < this.heap[swapIndex][0] || (rightChildEl[0] === this.heap[swapIndex][0] && rightChildEl[1] < this.heap[swapIndex][1]))) ){
                    swapIndex = rightChildIn;
                }
            }

            if(swapIndex === null){
                break;
            }

            this.heap[index] = this.heap[swapIndex];
            this.heap[swapIndex] = element;
            index = swapIndex
        }
    }
}