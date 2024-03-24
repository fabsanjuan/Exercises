// Problem: Given a string s, return the longest palindromic substring in s.
// Solution: Expand around a center (i) for each char in s and check if it is palindromic. Return the largest string.

function longestPalindrome(s) {
    if (s.length === 0) {
        return '';
    }

    let start = 0, end = 0

    function expandAroundCenter(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        
        return right - left - 1;
    }
    for (let i = 0; i < s.length; i++) {
        const len1 = expandAroundCenter(i, i);
        const len2 = expandAroundCenter(i, i + 1);
        const maxLength = Math.max(len1, len2);

        if (maxLength > end - start) {
            start = i - Math.floor((maxLength - 1) / 2);
            end = i + Math.floor(maxLength / 2);   
        }
    }
    return s.substring(start, end + 1);
}