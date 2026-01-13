/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    if(!head || !head.next) return head;

    let fast = head, slow = head, prev = null;
    while(fast && fast.next){
        prev = slow
        slow = slow.next;
        fast = fast.next.next;
    }
    prev.next = null;

    return merge(sortList(head), sortList(slow))
};


function merge(l1, l2){
    let sorted = new ListNode(0);
    let curr = sorted

    while(l1 && l2){
        if(l2.val > l1.val){
            curr.next = l1
            l1 = l1.next
        }else{
            curr.next = l2
            l2 = l2.next
        }

        curr = curr.next
    }

    curr.next = l1 || l2;

    return sorted.next
}