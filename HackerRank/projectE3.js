// Problem What is the largest prime factor of a given number N?
// Solution: Divide N by 2 completely if even. Start checking factors from 3++2 (odds). When factor^2 > N if N is not 1 we know N is a prime.

function largestPrimeFactor(n) {
    let largestFactor = 1;
    // Remove factors of 2.
    while (n % 2 === 0) {
        largestFactor = 2;
        n /= 2;
    }
    // Check for odd factors.
    let factor = 3;
    while (factor * factor <= n) {
        while (n % factor === 0) {
            largestFactor = factor;
            n /= factor;
        }
        factor += 2;
    }
    // If n is a prime number greater than 2.
    if (n > 2) {
        largestFactor = n;
    }
    return largestFactor;
}