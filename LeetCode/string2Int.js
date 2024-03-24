// Problem: Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function)
// Solution: 

function myAtoi(s) {
    let index = 0;
    let isNeg = false;
    let result = 0;
    let maxInt = 2 ** 31 - 1;
    let minInt = -(2 ** 31);

    while (index < s.length && s[index] === ' ') {
        index++;
    }

    if (s[index] === '-' || s[index] === '+') {
        isNeg = s[index] === '-';
        index++;
    }

    while (index < s.length && s[index] >= '0' && s[index] <= '9') {
        result = result * 10 + (s[index] - '0');
        index++;
    }

    result = isNeg ? -result : result;

    if (result < minInt) return minInt;
    if (result > maxInt) return maxInt;

    return result;
}