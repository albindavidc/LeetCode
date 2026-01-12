/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let lesserDummy = new LinkedList(0);
    let greaterDummy = new LinkedList(0);

    let lesser = lesserDummy;
    let greater = greaterDummy;

    let curr = head;

    while(curr){
        if(curr.val < x){
            lesser.next = curr;
            lesser = lesser.next
        }else{
            greater.next = curr;
            greater = greater.next
        }

        curr = curr.next
    }

    greater.next = null;
    lesser.next = greaterDummy.next;


    return lesserDummy.next
};