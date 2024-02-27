// Problem: Write a 'winner' function that goes through 2 stacks of cards and compares them. The higher value card wins the round, ties are 0 points each. Go through the whole deck and declare the winner and scoreboard.
// Solution: Create a function that accepts to arrays. Iterate through each element of array comparing both values against a hash map while keeping track of the score. Tally the totals and print result.

// TODO Create a hash map for all the playing card values. 
// TODO Create a loop for iterating through the deck cards (assumes equal length).
// TODO Compare each element value using the hash map.
// TODO Create a counter for each deck and keep track of score.
// TODO Return the totals for each counter in printed format.

function winner(deckSteve, deckJosh) {
    const cardValues = {'A': 14, 'K': 13, 'Q': 12, 'J': 11, 'T': 10}; // Numerical values of face cards.
    // Setup score counters for players.
    let scoreSteve = 0;
    let scoreJosh = 0;

    for (let i = 0; i < deckSteve.length; i++) {
        // Check if the card is a face card and use the cardvalues in those instances.
        let val1 = isNaN(deckSteve[i]) ? cardValues[deckSteve[i]] : parseInt(deckSteve[i], 10);
        let val2 = isNaN(deckJosh[i]) ? cardValues[deckJosh[i]] : parseInt(deckJosh[i], 10);

        // Compare scores.
        if (val1 > val2) {
            scoreSteve++;
        } else if (val1 < val2) {
            scoreJosh++;
        }
    }

    // Return winner.
    let winnerMsg;
    if (scoreSteve > scoreJosh) {
        winnerMsg = `Steve wins ${scoreSteve} to ${scoreJosh}`
    } else if (scoreSteve < scoreJosh) {
        winnerMsg = `Josh wins ${scoreJosh} to ${scoreSteve}`
    } else {
        winnerMsg = 'Tie'
    }

    return winnerMsg;
    
    

};