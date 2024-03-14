// Problem: Given an input string s and a pattern p, implement regular expression matching for the whole string. 
// Solution:

function isMatch(s, p) {
    if (p === '') {
        return s === '';
    }

    let firstMatch = s.length > 0 && (p[0] === s[0] || p[0] === '.');
    if (p.length >= 2 && p[1] === '*') {
        return (isMatch(s, p.substring(2)) || firstMatch && isMatch(s.substring(1), p));
    } else {
        return firstMatch && isMatch(s.substring(1), p.substring(1));
    }

    
}