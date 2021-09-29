/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
import LinkedList, { ListNode } from "../utils/linked-list";
function mergeTwoSortedList(l1, l2) {
    if(l1 == null){
        return l2;
    } else if(l2 == null) {
        return l1;
    } else if(l1.val < l2.val) {
        l1.next = mergeTwoSortedList(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoSortedList(l2.next, l1);
        return l2;
    }
};
const l1 = new LinkedList();
const l2 = new LinkedList();
l1.initFromArray([1,2,4]);
l2.initFromArray([1,3,4]);
console.log(l1.head, l2.head)
console.log(mergeTwoSortedList(l1.head, l2.head), [1,1,2,3,4,4]);