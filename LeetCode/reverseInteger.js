// Problem: Given a signed 32-bit int x, return x with its digits reversed. If the output is outside the 32-bit integer range, return 0.
// Solution: 

function reverseInteger(n) {
    let isNeg = n < 0;

    let reverseStr = Math.abs(n).toString().split('').reverse().join('');
    let reverseInt = parseInt(reverseStr, 10);

    if (isNeg) {
        reverseInt = -reverseInt;
    }

    if (reverseInt < ((-2) ** 31) || reverseInt > (2 ** 31 - 1)) {
        return 0;
    }
    return reverseInt;
}