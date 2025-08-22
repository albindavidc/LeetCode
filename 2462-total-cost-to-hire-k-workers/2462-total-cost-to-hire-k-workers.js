/**
 * @param {number[]} costs
 * @param {number} k
 * @param {number} candidates
 * @return {number}
 */
var totalCost = function(costs, k, candidates) {
    let heap = [];
    let totalCost = 0;

    function heapPush(cost, index){
        heap.push([cost, index]);
        heapifyUp();
    }
    function compare(a,b){
        if(a[0] === b[0]) return a[1] - b[1];
        return a[0] - b[0]
    }
    function heapifyUp(){
        let index = heap.length - 1;
        while(index > 0){
            let parent = Math.floor((index - 1)/2);
            if(compare(heap[parent], heap[index]) < 0) break;
            [heap[index], heap[parent]] = [heap[parent], heap[index]];
            index = parent;
        }
    }

    function heapPop(){
        if(heap.length === 0) return null;
        if(heap.length === 1) return heap.pop();
        const removeEl = heap[0];
        heap[0] = heap.pop();
        heapifyDown()
        return removeEl;
    }
    function heapifyDown(){
        let index = 0;
        while(true){
            let smallest = index;
            let left = 2 * index + 1;
            let right = 2 * index + 2;

            if(left < heap.length && compare(heap[left], heap[smallest]) < 0) smallest = left;
            if(right < heap.length && compare(heap[right], heap[smallest]) < 0) smallest = right;

            if(smallest === index) break;
            [heap[smallest], heap[index]] = [heap[index], heap[smallest]];
            index = smallest;
        }
    };

    let left = 0;
    let right = costs.length - 1;

    for(let i = 0; i<candidates && left <= right; i++){
        heapPush(costs[left], left);
        left++;
    }
    for(let i = 0; i<candidates && left <= right; i++){
        heapPush(costs[right], right);
        right--
    }

    for(let i = 0; i<k; i++){

        let popped = heapPop();
        if(!popped) break;

        let [cost, index] = popped;
        totalCost += cost;

        if(left <= right){
            if(index < left){
                heapPush(costs[left], left);
                left++;
            }else{
                heapPush(costs[right], right);
                right--;
            }
        }
    }

    return totalCost

};