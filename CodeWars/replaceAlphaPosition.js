// Problem: Given a string replace every letter with its position in the alphabet. Don't return non-letters.
// Solution: Iterate through string - if in hash map add values to array and return joined string.

function alphabetPosition(text) {
    const alphaMap = {
        "a": 1,
        "b": 2,
        "c": 3,
        "d": 4,
        "e": 5,
        "f": 6,
        "g": 7,
        "h": 8,
        "i": 9,
        "j": 10,
        "k": 11,
        "l": 12,
        "m": 13,
        "n": 14,
        "o": 15,
        "p": 16,
        "q": 17,
        "r": 18,
        "s": 19,
        "t": 20,
        "u": 21,
        "v": 22,
        "w": 23,
        "x": 24,
        "y": 25,
        "z": 26
      }
    let numberString = [];

    for (let i = 0; i < text.length; i++) {
        let char = text[i].toLowerCase();
        if (char in alphaMap) {
            numberString.push(alphaMap[char]);
        }
    }

    return numberString.join(' ');
}