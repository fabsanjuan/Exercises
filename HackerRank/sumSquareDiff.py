# Problem:  Find the abs difference between the sum of the squares nad the square of the sums up to N.
# Solution: First find the sum of sqaures then find the square of the sum then return the difference.

def sum_of_squares(n):
    sums = 0;
    for num in range(n + 1):
        sums += num * num
    return sums

def square_of_sums(n):
    sums = 0
    for num in range(n + 1):
        sums += num
    return sums * sums

def sum_square_difference(n):
    square_sum = square_of_sums(n)
    sum_square = sum_of_squares(n)
    return abs(square_sum - sum_square)