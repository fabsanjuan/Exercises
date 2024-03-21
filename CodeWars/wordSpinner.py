# Problem: Write a func
# Solution:

def spinWords(string):
    # Split string into words.
    string_words = string.split()
    # Iterate through words and reverse those with 5 letters or more.
    processed_words = []
    for word in string_words:
        if len(word) >= 5:
            reversed_word = word[::-1]
            processed_words.append(reversed_word)
        else:
            processed_words.append(word)
    # Join the words into a string.
    reply = " ".join(processed_words)
    return reply













'''
This is a concise version of the code above. Same logic.

def spinWords(sentence):
    # Using a list comprehension to process words in one line
    return ' '.join([word[::-1] if len(word) >= 5 else word for word in sentence.split()])

'''