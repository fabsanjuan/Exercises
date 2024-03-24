# Problem: Given a string s, find the length of the longest substring without repeating characters.
# Solution: Use the sliding window technique to iterate through string and ensure no repeating chars.

def length_of_longest_substring(s):
    # Initialize char map and length tracker variables.
    window_char_map = {}
    window_start = 0
    max_length = 0

    # Iterate through string and check if char already in dict.
    for i, char in enumerate(s):
        if char in window_char_map and window_char_map[char] >= window_start:
            window_start = window_char_map[char] + 1

        # Update dictionary.
        window_char_map[char] = i

        # Update max length if needed.
        max_length = max(max_length, i - window_start + 1)

    return max_length