# Problem: 
# Solution:

import math

def multiply5(number):
    # Handles case for 0.
    if number == 0:
        return 0
    digits = int(math.log10(abs(number))) + 1
    answer = number * (5 ** digits)
    return answer