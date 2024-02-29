# Problem: Given 2 sorted arrays of size m and n respectively. Return the median of the two sorted arrays.
# Solution: Merge the arrays and find the length of the new array. Use the length to calculate the median.

# Function that calculates the median of an array.
def find_median(arr):
    length = len(arr)
    if length % 2 == 0:
        mid1 = (length // 2) - 1
        mid2 = length // 2
        median = (arr[mid1] + arr[mid2]) / 2.0
        return median
    else:
        median = arr[length // 2]
        return float(median)
    
def merge_two_sorted_arrays(nums1, nums2):
    # Initialize variables
    merged_array = []
    i, j = 0, 0

    # Merge nums1 and nums2 in order.
    while i < len(nums1) and j < len(nums2):
        if nums1[i] < nums2[j]:
            merged_array.append(nums1[i])
            i += 1
        else:
            merged_array.append(nums2[j])
            j += 1
    
    # Append the remaining elements.
    while i < len(nums1):
        merged_array.append(nums1[i])
        i += 1
    while j < len(nums2):
        merged_array.append(nums2[j])
        j += 1

    return merged_array