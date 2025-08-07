/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function (head) {
    let curr = head;
    let values = [];

    while (curr !== null) {
        values.push(curr.val);
        curr = curr.next;
    }

    let maxSum = 0;
    let n = values.length;

    for (let i = 0; i < n / 2; i++) {
        let sum = values[i] + values[n - 1 - i];
        maxSum = Math.max(maxSum, sum);
    }
    
    return maxSum;
};