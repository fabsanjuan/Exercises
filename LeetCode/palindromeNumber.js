// Problem: Given an integer x, return true if x is a palindrome and false otherwise.
// Solution:

function isPalindrome(x) {
    const reverse_x = Number(x.split('').reverse().join(''));
    return x === reverse_x;
}