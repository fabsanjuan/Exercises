// Problem: Find the largest palindrome made from the product of two 3-digit numbers which is less than N.
// Solution: Iterate through all possible products of two 3 digit numbers and check if it is palindrome.

// Return true if number is a palindrome.
function isPalindrome(number) {
    const numberStr = number.toString();
    const reversedStr = numberStr.split('').reverse().join('');
    return numberStr === reversedStr;
}
// Iterate down from N.
function findLargestPalindrome(n) {
    let maxPalindrome = 0;
    let start = Math.min(999, Math.floor(Math.sqrt(n - 1)));

    for (let i = start; i >=100; i--) {
        for (let j = 999; j >= i; j--) {
            let product = i * j;
            if (product < maxPalindrome) {
                break; // No larger palindrome can be found with this i move to next i.
            }
            if (product < n && isPalindrome(product)) {
                maxPalindrome = Math.max(maxPalindrome, product);
                break; // found largest palindrome for this i.
            }
        }
    }
    return maxPalindrome;
}