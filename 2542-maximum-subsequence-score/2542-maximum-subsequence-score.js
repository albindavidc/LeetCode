/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var maxScore = function(nums1, nums2, k) {
    let pairs = nums1.map((n1, i) => [nums2[i], n1]).sort((a,b) => b[0] - a[0]);

    let minHeap = [];
    let sum = 0;
    let maxScore = 0;

    const heapPush = (val) => {
        minHeap.push(val);
        heapifyUp();
    }

    function heapifyUp(){
        let index = minHeap.length - 1;
        while(index > 0){
            let parent = Math.floor((index -1)/2);

            if(minHeap[parent] < minHeap[index]) break;
            [minHeap[parent], minHeap[index]] = [minHeap[index], minHeap[parent]];
            index = parent;
        }
    }

    const heapPop = () => {
        if(minHeap.length === 0) return null;
        const popedVal = minHeap[0]
        minHeap[0] = minHeap.pop()
        heapifyDown();
        return popedVal;
    }

    function heapifyDown(){
        let index = 0;
        while(true){
            let smallest = index;
            let left = 2 * index + 1;
            let right = 2 * index + 2;

            if(left < minHeap.length && minHeap[left] < minHeap[smallest])smallest = left;
            if(right < minHeap.length && minHeap[right] < minHeap[smallest]) smallest = right;

            if(smallest === index) break;
            [minHeap[smallest], minHeap[index]] = [minHeap[index], minHeap[smallest]];
            index = smallest;
        }
    }

    for(let [nums2, nums1] of pairs){
        heapPush(nums1);
        sum += nums1;
        if(minHeap.length > k) sum -= heapPop();
        if(minHeap.length === k){
            maxScore = Math.max(maxScore, sum * nums2)
        }
    }

    return maxScore
};