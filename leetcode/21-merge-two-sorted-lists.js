/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
var mergeTwoLists = function (list1, list2) {
  // input: given the heads of two sorted linked lists
  // output: head of merged linked list
  // two pointers to iterate over linked list
  // compare pointers, the next pointer will point to the lower of the two pointers
  // if they're both the same, listNode from list1 will go first, then the listNode from list2
  // we stop iterating once the pointers reach the end for both lists

  let dummy = new ListNode();
  let tail = dummy;

  while (list1 && list2) {
      if (list1.val < list2.val) {
          tail.next = list1;
          list1 = list1.next;
      } else {
          tail.next = list2;
          list2 = list2.next;
      }
      tail = tail.next;
  }

  if (list1) {
      tail.next = list1;
  } else if (list2) {
      tail.next = list2;
  }

  return dummy.next;
};

const list1 = [1, 2, 4];
const list2 = [1, 3, 4];

console.log(mergeTwoLists(list1, list2));
