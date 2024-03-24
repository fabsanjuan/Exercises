// Problem: Write an algorithm that takes an array and moves all the zeros to the end, preserving the order of the other elements.
// Solution:

function moveZerosToEnd(arr) {
    let lastNonZeroFound = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            let temp = arr[i];
            arr[i] = arr[lastNonZeroFound];
            arr[lastNonZeroFound] = temp;
            lastNonZeroFound++;
        }
    }
    return arr;
}