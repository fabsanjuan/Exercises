// Problem: Find the sum of the even-valued terms in the Fibonacci sequence whose values do not exceed N.
// Solution: Generate the fibonacci sequence and filter the even terms. Add the total.

function fibonacci_sum(n) {
    // Set initial values.
    let totalSum = 0;
    let previousTerm = 0;
    let currentTerm = 1;

    // Iterate up to n and add all even values of the sequence. 
    while (currentTerm <= n) {
        if (currentTerm % 2 == 0) {
            totalSum += currentTerm;
        }

        // Fibonacci calculation.
        let newTerm = currentTerm + previousTerm;
        previousTerm = currentTerm;
        currentTerm = newTerm;
    }

    // Return sum of even numbers in fibonacci.
    return totalSum;
}