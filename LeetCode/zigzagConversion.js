// Problem: Write characters in a zigzag pattern across a specfied number of rows.
// Solution: Simulate writing up and down rows by keeping track of current row and turning back at the edges.

function zigzagConversion(s, numRows) {
    if (numRows === 1 || numRows >= s.length) {
        return s;
    }

    let rows = Array.from({ length: numRows }, () => '');
    let currentRow = 0;
    let goingDown = false;

    for (let char of s) {
        rows[currentRow] += char;
        if (currentRow === 0 || currentRow === numRows - 1) {
            goingDown = !goingDown;
        }

        currentRow += goingDown ? 1 : -1;
    }

    return rows.join('');
}