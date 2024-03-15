# Problem: Find the total_sum of all the primes not greater than given N.
# Solution: Time limit exceeded in these examples.

def sum_of_primes(n):
    prime = [True for num in range(n + 1)]
    p = 2
    total_sum = 0
    while (p <=n):
        if (prime[p]):
            total_sum += p
            for i in range(p * p, n + 1, p):
                prime[i] = False

        p += 1
    return total_sum