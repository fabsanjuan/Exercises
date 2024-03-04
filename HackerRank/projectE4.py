# Problem: Find the largest palindrome made from the product of two 3-digit numbers which is less than N.
# Solution: Iterate through all possible products of two 3 digit numbers and check if it is palindrome.
import math
# Check if number is palindrome.
def is_palindrome(number):
    number_str = str(number)
    reversed_str = "".join(reversed(number_str))
    return number_str == reversed_str

# Iterate down from N.
def find_largest_palindrome(n):
    largest_palindrome = 0
    start = min(999, math.floor(math.sqrt(n - 1)))

    for i in range(start, 99, -1):
        j = 999
        while j >= i:
            product = i * j
            if product < largest_palindrome:
                break
            if product < n and is_palindrome(product):
                largest_palindrome = max(largest_palindrome, product)
                break
            j -= 1

    return largest_palindrome
