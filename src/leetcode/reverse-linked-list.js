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
 var reverseList = function(head) {
    const stack = []
    while(head.next){
        stack.push(new ListNode(head.val))
    }
    let node = null
    while(stack.length) {
        if(node == null) {
            node = stack.pop()
        } else {
            node.next = stack.pop()
        }
    }
    return node;
 };