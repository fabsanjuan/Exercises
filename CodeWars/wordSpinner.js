// Problem: Write a function that takes in a string of words and spaces only and returns the same string with all words > 5 letters reversed (WordrennipS)
// Solution:

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