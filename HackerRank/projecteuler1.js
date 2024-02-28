// Problem: Find the sum of all the multiples of 3 or 5 below N.
// Solution: Use the formula for arithmetic sums

// Create function to find sum of multiples with arithmetic formula.
function sumOfMultiples(k, n) {
    const m = Math.floor((n - 1) / k);
    const sum = k * m * (m + 1) / 2;
    return sum;

}

// Find the sum of multiples of 3 and 5. 
function totalSum(n) {
    const sumOf3 = sumOfMultiples(3, n);
    const sumOf5 = sumOfMultiples(5, n);
    const sumOf15 = sumOfMultiples(15, n);

    // Add sums and subtract overlap
    const answer = sumOf3 + sumOf5 - sumOf15;
    return answer;
}