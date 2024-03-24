// Problem: Given a string s, find the length of the longest substring without repeating characters.
// Solution: Use the sliding window technique to iterate through string and ensure no repeating chars.

function lengthOfLongestSubstring(s) {
    // Initialize variables to store new instances of chars and track substring length.
    let windowCharMap = new Map();
    let windowStart = 0;
    let maxLength = 0;

    for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
        const currentChar = s[windowEnd];
        // if the character is already in the window, move the start to the right of char.
        if (windowCharMap.has(currentChar)) {
            windowStart = Math.max(windowStart, windowCharMap.get(currentChar) + 1);
        }
        
        // Update last occurence of current char.
        windowCharMap.set(currentChar, windowEnd);

        // Update the max length if needed.
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }

    return maxLength;
}