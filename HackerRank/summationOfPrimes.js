// Problem: Find the sum of all the primes not greater than given N.
// Solution: Ues the sieve of eratosthenes and then sum the primes.

function sumOfPrimes(N) {
    let primes = new Array(N + 1).fill(true);
    primes[0] = false;
    primes[1] = false;
    let sum = 0;

    for (let p = 2; p <= N; p++) {
        if (primes[p]) {
            sum += p;
            for (let i = p*p; i <= N; i += p) {
                primes[i] = false;
            }
        }
    }
    return sum;
}
