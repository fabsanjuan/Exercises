// Problem: Find the abs difference between the sum of the squares and the square of the sum of natrual numbers up to N.
// Solution: First find the sum of squares, then find the square of the sum, then return the difference.

function sumOfSquares(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i * i;
    }
    return sum;
}

function squareOfSums(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum * sum;
}

function sumSquareDifference(n) {
    let squareOfSum = squareOfSums(n);
    let sumOfSquare = sumOfSquares(n);
    return Math.abs(squareOfSum - sumOfSquare);
}



// function sumOfSquares(n) {
//     return n * (n + 1) * (2 * n + 1) / 6;
// }

// function squareOfSums(n) {
//     let sum = n * (n + 1) / 2;
//     return sum * sum;
// }

// function sumSquareDifference(n) {
//     let squareOfSum = squareOfSums(n);
//     let sumOfSquare = sumOfSquares(n);
//     return Math.abs(squareOfSum - sumOfSquare);
// // }

// // Example usage
// console.log(sumSquareDifference(10));  // Expected: 2640
// console.log(sumSquareDifference(100)); // Larger input example