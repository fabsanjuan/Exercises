# Problem: Find the sum of all the multiples of 3 or 5 below N.
# Solution: Use the formula for arithmetic sums.

# Create a function that finds the sum of arithmetic series using formula.
def sum_of_multiples(k, n):
    m = (n - 1) // k
    return k * m * (m + 1) // 2

# Find the sum of multiples of 3 or 5.
def total_sum(n):
    sum_3 = sum_of_multiples(3, n)
    sum_5 = sum_of_multiples(5, n)
    sum_15 = sum_of_multiples(15, n)

    # Add the sums and subtract overlap.
    answer = sum_3 + sum_5 - sum_15
    return answer

'''
Practice tests on hackerrank page:

Imoprt SYS

t = int(input().strip())     # Read the number of test cases
for a0 in range(t):          # Iterate through each test case
    n = int(input().strip()) # Read the input number for this test case

    print(total_sum(n))
    
'''