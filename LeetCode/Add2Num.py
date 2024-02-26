# Problem: Two non-empty linked lists representing two non-neg integers. The digits are stored in reverse order and each node contains a single digit. Add the numbers and return the sum as a linked list. Assume no leading zeros.
# Solution: Iterate through both linked lists simultaneously, creating your own linked list by adding corresponding digits and handle carry-over values.

# Blueprint for linked list object.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

# Create dummy header for edge cases and carry over tracker.
def addTwoNumbers(l1, l2):
    dummy_head = ListNode(0)
    current = dummy_head
    carry = 0

    # Add all values and carry overs in the nodes until values null or 0.
    while l1 or l2 or carry:
        val1 = l1.val if l1 else 0
        val2 = l2.val if l2 else 0
        total = val1 + val2 + carry

        # Create new node and move 'current' pointer.
        carry = total // 10
        current.next = ListNode(total % 10)
        current = current.next

        # Move list pointers to next node.
        if l1:
            l1 = l1.next
        if l2:
            l2 = l2.next
    # Return the new linked list.
    return dummy_head.next
    
