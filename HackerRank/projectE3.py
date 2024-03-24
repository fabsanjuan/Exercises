# Problem What is the largest prime factor of a given number N?
# Solution: Divide N by 2 completely if even. Start checking factors from 3++2 (odds). When factor^2 > N if N is not 1 we know N is a prime.

def largest_prime_factor(n):
    largest_factor = 1
    # Remove factors of 2.
    while n % 2 == 0:
        largest_factor = 2
        n //= 2
    # Check for odd factors.
    factor = 3
    while factor * factor <= n:
        while n % factor == 0:
            largest_factor = factor
            n //= factor
        factor += 2
    # If n is a prime return n.
    if n > 2:
        largest_factor = n
    return largest_factor











# Corrections were to use integer division to avoid iconsistencies with floats in python.