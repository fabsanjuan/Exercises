#Problem: Create a function that takes a sequence as an arg and returns a list of items without any elements with the same values next to each other and preserving the original order of elements.
# Solution: Iterate over each element checking the previous element and adding to list only if unique.

def unique_in_order(sequence):
    new_list = []
    previous_term = None

    for item in sequence:
        if item != previous_term:
            new_list.append(item)
            previous_term = item
        
    return new_list