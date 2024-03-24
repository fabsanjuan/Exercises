// Problem: Multiply each arg by (5 raised to the power) of length of arg digits.
// Solution:

function multiply5(number) {
    // Handles case for 0
    if (number == 0) {
        return 0;
    }
    // Multiply arg.
    const digits = Math.floor(Math.log10(Math.abs(number))) + 1;
    const answer = number * (5 ** digits);
    return answer;
}

