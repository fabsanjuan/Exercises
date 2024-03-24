

def find_greatest_product(n, k):
    # Convert N to a string to easily access individual digits
    digits = str(n)
    max_product = 0
    
    # Loop through the digits, stopping at the last possible starting point for k digits
    for i in range(len(digits) - k + 1):
        product = 1
        
        # Calculate the product of the next k digits
        for j in range(k):
            product *= int(digits[i + j])
        
        # Update max_product if the current product is greater
        if product > max_product:
            max_product = product
    
    return max_product