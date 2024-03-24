# Problem: Given an integer check if it is a palindrome.


def is_palindrome(x):
    if x < 0: 
        return False
    reverse_x = int(str(x)[::-1])  # This reverses the string
    return x == reverse_x