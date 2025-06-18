/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    let slow = head;
    let fast = head;

    while(fast !== null && fast.next !==null){
        slow = slow.next;
        fast = fast.next.next;
    }

    let list2head = slow.next;
    slow.next = null;
    let list1tail = slow

    let prev = null;
    let curr = list2head;
    while(curr){
        let next = curr.next;
        curr.next = prev;
        prev = curr
        curr = next
    }

    let first = head; second = prev;
    while(second){
        let temp1 = first.next;
        let temp2 = second.next;

        first.next = second;
        second.next = temp1;
        
        first = temp1;
        second = temp2
    }
    
};