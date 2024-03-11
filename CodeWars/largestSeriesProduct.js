// Problem: Find the greatest product of k consecutive digits in the digit number N.
// Solution:

function findGreatestProduct(n, k) {
    // Convert N to a string to easily access individual digits
    const digits = n.toString();
    let maxProduct = 0;
    
    // Loop through the digits, stopping at the last possible starting point for k digits
    for (let i = 0; i <= digits.length - k; i++) {
        let product = 1;
        
        // Calculate the product of the next k digits
        for (let j = 0; j < k; j++) {
            product *= parseInt(digits[i + j], 10);
        }
        
        // Update maxProduct if the current product is greater
        if (product > maxProduct) {
            maxProduct = product;
        }
    }
    
    return maxProduct;
}