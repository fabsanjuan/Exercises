// Problem: Given an array of integers <nums> and an integer <target>, return indices of the two numbers such that they add up to <target>. You may assume that each input would have exactly one solution, and may not use the same element twice. Answer in any order.
// Solution: Employ a hash map to store visited elements and their indices. Find the complement and return the indices.

function twoSum(nums, target) {
    const map = {}; // Create hash map.
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        // Check if the compliment exists in hash map and return indices.
        if (map[complement] !== undefined) {
            return [map[complement], i];
        };
        // Add the complement to the hash map.
        map[nums[i]] = i;
    };
};