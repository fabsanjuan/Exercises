// Problem: Write a function that takes in a string of words and spaces only and returns the same string with all words > 5 letters reversed (WordrennipS)
// Solution:

// TODO: Create placeholder array.
// TODO: Split the string by spaces.
// TODO: For each word count the length of chars and reverse if needed. Processing.
// TODO: Add each word to array after processing.
// TODO: Convert array back to string with spaces.

function spinWords(string) {
    // Split string into array of words.
    const wordsInString = string.split(' ');

    // Iterate through words and reverse those with more than 5 letters.
    const processedWords = wordsInString.map(word => {
        if (word.length >= 5) {
            return word.split('').reverse().join('');
        }
        return word;
    })
    
    // Join the processed words into a string
    const reply = processedWords.join(' ');
    return reply;
};