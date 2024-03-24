// Problem: Create a function that takes a sequence as an arg and returns a list of items without any elements with the same values next to each other and preserving the original order of elements.
// Solution: Iterate over each element checking the previous element and adding to list only if unique.

function uniqueInOrder(iterable) {
    // Initialize variables.
    let list = [];
    let previousTerm;

    for (let item of iterable) {
        if (item !== previousTerm) {
            list.push(item);
            previousTerm = item;
        }
    }

    return list; 
}