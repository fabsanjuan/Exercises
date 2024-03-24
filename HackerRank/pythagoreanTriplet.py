# Problem: Given, N check if there exists any pythagorean triplet for which a + b + c = N
# Solution: 

def pythagorean_triplet(n):
    answer = -1
    for a in range(1, n // 3):
        b = (n**2 - 2*n*a) / (2*(n - a))
        c = n - a -b
        if b.is_integer() and a < b < c and a**2 + b**2 == c**2:
            answer = max(answer, a*b*c)
    return int(answer)