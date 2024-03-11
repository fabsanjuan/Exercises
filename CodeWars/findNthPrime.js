// Given any N find the Nth prime.

function sieveOfEratosthenes(limit) {
    let primes = new Array(limit + 1).fill(true);
    primes[0] = false;
    primes[1] = false;
    const sqrtLimit = Math.sqrt(limit);

    for (let p = 2; p <= sqrtLimit; p++) {
        if (primes[p]) {
            for (let i = p * p; i <= limit; i += p) {
                primes[i] = false;
            }
        }
    }

    let primeNumbers = [];
    for (let p = 2; p <= limit; p++) {
        if (primes[p]) primeNumbers.push(p);
    }
    return primeNumbers;
}

function findNthPrime(n) {
    let limit;
    if (n < 6) {
        limit = 15; // A small initial limit for small n values
    } else {
        limit = Math.ceil(n * (Math.log(n) + Math.log(Math.log(n)))); // n log n for larger values
    }

    let primes = sieveOfEratosthenes(limit);
    if (n <= primes.length) {
        return primes[n - 1];
    } else {
        return null; // n is too large for the estimated limit
    }
}