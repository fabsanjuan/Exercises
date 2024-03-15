// Problem: Given an N, check if there exists any pythagorean triplet for which a + b + c = n.
// Solution:

function pythagoreanTriplet(n) {
    let answer = -1;
    for (let a = 1; a < Math.floor(n / 3); a++) {
        let b = (n**2 - 2*n*a) / (2*(n - a));
        let c = n - a - b;

        if (Number.isInteger(b) && (a < b) && (b < c) && a**2 + b**2 === c**2) {
            answer = Math.max(answer, a*b*c);
        }
    }
    return answer;
}