// Problem: Given 2 sorted arrays of size m and n respectively. Return the median of the two sorted arrays.
// Solution: Merge the arrays and find the length of the new array. Use the length to calculate the median.

// Function that finds median value of an array.
function findMedian(arr) {
    const length = arr.length;
    if (length % 2 == 0) {
        const mid1 = length / 2 - 1;
        const mid2 = length / 2;
        const median = (arr[mid1] + arr[mid2]) / 2;
        return median;
    } else {
        const median = arr[Math.floor(length / 2)];
        return median;
    }
}

function mergeTwoSortedArrays(nums1, nums2) {
    // Initialize variables
    const mergedArray = [];
    let i = 0, j = 0;

    // Merge nums1 and nums2 in order.
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            mergedArray.push(nums1[i++]);
        } else {
            mergedArray.push(nums2[j++]);
        }
    }

    // Append remaining elements
    while (i < nums1.length) mergedArray.push(nums1[i++]);
    while (j < nums2.length) mergedArray.push(nums2[j++]);

    // Find median and return answer.
    const answer = findMedian(mergedArray);
    return answer;
}





