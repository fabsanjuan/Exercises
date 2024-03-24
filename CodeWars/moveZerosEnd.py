# Problem: Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
# Solution:

def move_zeros_to_end(lst):
    lastNonZeroFound = 0
    for i in range(len(lst)):
        if lst[i] != 0:
            lst[i], lst[lastNonZeroFound] = lst[lastNonZeroFound], lst[i]
            lastNonZeroFound +=1
    return lst
