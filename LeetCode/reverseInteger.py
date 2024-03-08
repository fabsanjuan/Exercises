# Problem: Given a signed 32-bit int x, return x with its digits reversed. If the output is outside 32-bit integer range return 0.
# Solution:

def reverse_integer(n):
    is_negative = n < 0

    reverse_str = str(abs(n))[::-1]
    reverse_int = int(reverse_str)

    if is_negative:
        reverse_int = -reverse_int

    if reverse_int < (-2 ** 31) or reverse_int > (2 ** 31 - 1):
      return 0
    
    return reverse_int
