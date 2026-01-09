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
    if(!head) return null;

    let dummy = new ListNode(0);
    dummy.next = head;

    let prev = dummy
    let curr = head;

    while(curr){
        if(curr.next && curr.val === curr.next.val){
            let duplicate = curr.val;

            while(curr && curr.val === duplicate){
                curr = curr.next
            }

            prev.next = curr
        }
        else{
            prev = curr;
            curr = curr.next
        }
    }

    return dummy.next
};