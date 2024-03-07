# Problem: What is the smallest positive number that is evenly divisible by all of the numbers from 1 to N?
# Solution: Find all the primes and their highest powers <= N and the product will be the lcm.

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

def smallest_multiple(n):
    primes = sieve_of_eratosthenes(n)
    lcm = 1
    for p in primes:
        highest_power = p
        while highest_power * p <= n:
            highest_power *= p
        lcm *= highest_power

    return lcm
