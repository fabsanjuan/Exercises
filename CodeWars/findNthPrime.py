# Problem: Given any n N find the N'th prime.
# Solution: 

from math import log

def sieve_of_eratosthenes(n):
    prime = [True for num in range(n + 1)]
    p = 2
    while (p * p <=n):
        if (prime[p]):
            for i in range(p * p, n + 1, p):
                prime[i] = False

        p += 1
    primes = []
    for p in range(2, n + 1):
        if prime[p]:
            primes.append(p)
    return primes

# Find the nth prime. 
def find_nth_prime(n):
    # Estimate for the upper limit of the n-th prime
    if n < 6:
        limit = 15  # Small n values adjustment
    else:
        limit = int(n * (log(n) + log(log(n))))  # n log n for larger values

    primes = sieve_of_eratosthenes(limit)
    if n <= len(primes):
        return primes[n-1]
    else:
        return None  # n is too large for the estimated limit