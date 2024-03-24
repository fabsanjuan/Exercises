# Problem: Implement the myAtoi(string s) function.
# Solution:

def my_atoi(s):
    index = 0
    is_neg = False
    result = 0
    max_int = 2 ** 31 -1
    min_int = -(2 ** 31)

    while index < len(s) and s[index] == ' ':
        index += 1
    
    if index < len(s) and (s[index] == '-' or s[index] == '+'):
        is_neg = s[index] == '-'
        index += 1
    
    while index < len(s) and '0' <= s[index] <= '9':
        result = result * 10 + int(s[index])
        index += 1

    result = -result if is_neg else result
    if result < min_int:
        return min_int
    if result > max_int:
        return max_int
    
    return result
