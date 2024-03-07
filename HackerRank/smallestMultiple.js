// Problem: What is the smallest positive number that is evenly divisible by all of the numbers from 1 to N?
// Solution: Find all the primes and their highest powers <= N and the product will be the lcm.

function sieveOfEratosthenes(n) {
    let primes = [];
    let prime = new Array(n + 1).fill(true);
    prime[0] = prime [1] = false;

    for (let p = 2; p * p <= n; p++) {
        if (prime[p]) {
            for (let i = p * p; i <= n; i += p) {
                prime[i] = false;
            }
        }
    }

    for (let p = 2; p <= n; p++) {
        if (prime[p]) {
            primes.push(p);
        } 
    }
    return primes;
}

function smallestMultiple(n) {
    let primes = sieveOfEratosthenes(n);
    let lcm = 1;

    for (let i = 0; i < primes.length; i++) {
        let p = primes[i];
        let highestPower = p;
        while (highestPower * p <= n) {
            highestPower *= p;
        }
        lcm *= highestPower;
    }

    return lcm;
}

    