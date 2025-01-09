// https://leetcode.com/problems/remove-linked-list-elements/description/
// 203. Remove Linked List Elements
// Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

 

// Example 1:


// Input: head = [1,2,6,3,4,5,6], val = 6
// Output: [1,2,3,4,5]
// Example 2:

// Input: head = [], val = 1
// Output: []
// Example 3:

// Input: head = [7,7,7,7], val = 7
// Output: []
 

// Constraints:

// The number of nodes in the list is in the range [0, 104].
// 1 <= Node.val <= 50
// 0 <= val <= 50
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

// approach: create a dummy node to point to the head of the linked list
// iterate through the linked list
// if the current node's value is equal to the value we want to remove
// point the current node to the next node
// otherwise, move the current node to the next node
// return the dummy node's next node

// time complexity: O(n)
// space complexity: O(1)
var removeElements = function(head, val) {
    let temp = new ListNode(0), curr = temp;
    temp.next = head;

    while (curr.next !== null) {
        if (curr.next.val === val) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }
    }

    return temp.next;
};

// approach: iterate through the linked list
// similar to above but we just initialize the current node to the head
// and we don't need a dummy node
// if the head's value is equal to the value we want to remove
// move the head to the next node
// otherwise, break out of the loop
// then iterate through the linked list
// if the next node's value is equal to the value we want to remove
// point the next node to the next next node
// otherwise, move the current node to the next node
// and return the head
// time complexity: O(n)
// space complexity: O(1)
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let curr = head;

    while (head) {
        if (head.val === val) {
            head = head.next;
        } else {
            break;
        }
    }

    while (curr && curr.next) {
        if (curr.next.val === val) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }
    }

    return head;
};