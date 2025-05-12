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
var deleteDuplicates = function(head) {
    if(head === null || head.next === null){
        return head;
    }

    head.next = deleteDuplicates(head.next);
    if(head.next.val !== null && head.next.val === head.val){
        return head.next
    }
    return head

};