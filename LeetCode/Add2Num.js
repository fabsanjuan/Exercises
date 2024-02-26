// Problem: Two non-empty linked lists representing two non-neg integers. The digits are stored in reverse order and each node contains a single digit. Add the numbers and return the sum as a linked list. Assume no leading zeros.
// Solution: Iterate through both linked lists simultaneously, creating your own linked list by adding corresponding digits and handle carry-over values.

// Create object blueprint.
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    };
};

function addTwoNumbers(l1, l2) {
    // Setup dummyhead to simplify edge cases and variable to track carry overs.
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    let carry = 0;

    // While values or carry over remain continue to add the values.
    while (l1 !== null || l2 !== null || carry > 0) {
        let val1 = (l1 !== null) ? l1.val : 0;
        let val2 = (l2 !== null) ? l2.val : 0;
        let sum = val1 + val2 + carry;

        carry = Math.floor(sum / 10); // determine carry over.
        current.next = new ListNode(sum % 10); // create a new node with result.
        current = current.next; // move'current' pointer.

        // Move list pointer to next node.
        if (l1 !== null) l1 = l1.next; 
        if (l2 !== null) l2 = l2.next;
    }

    // Return linked list result.
    return dummyHead.next;
};

