# Problem: Given an array of integers <nums> and an integer <target>, return indices of the two numbers such that they add up to <target>. You may assume that each input would have exactly one solution, and may not use the same element twice. Answer in any order.
# Solution: Employ a hash map to store visited elements and their indices. Find the complement and return the indices.

def two_sum(nums, target):
    num_map = {} # Create a dictionary.
    for i, num in enumerate(nums):
        complement = target - num
        if complement in num_map: # Check if complement in dictionary.
            return [num_map[complement], i]
        num_map[num] = i # Add complement to dictionary.

