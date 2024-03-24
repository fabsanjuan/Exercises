// Problem: Convert words in a string delimited by dashes and underscores into camelcase.
// Solution: Iterate through each char of the string and skip dashes and underscores while capitalizing the subsequent char.

function toCamelCase(str) {
    if (str === '') {
        return '';
    }
    let camelCaseString = [];
    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if ((char === '-' || char === '_') && i + 1 < str.length) {
            char = str[i + 1].toUpperCase();
            camelCaseString.push(char);
            i += 1;
        }
        else {
            camelCaseString.push(char);
        }
    }
    return camelCaseString.join('');
}