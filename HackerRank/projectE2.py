# Problem: Find the sum of the even-valued terms in the Fibonacci sequence whose values do not exceed N.
# Solution: Generate the fibonacci sequence and filter the even terms. Add the total.

# Create fibonacci sequence up to n.
def fibonacci_sum(n):
    # Set initial values.
    current_term = 1
    previous_term = 0
    total_sum = 0
    # Iterate through sequence and add even terms.
    while current_term <= n:
        if current_term % 2 == 0:
            total_sum += new_term
        # fibonacci calculation.
        new_term = previous_term + current_term
        previous_term = current_term
        current_term = new_term
    # Return sum of fibonacci.
    return total_sum


