# Problem: Write a 'winner' function that goes through 2 stacks of cards and compares them. The higher value card wins the round, ties are 0 points each. Go through the whole deck and declare the winner and scoreboard.
# Solution: Create a function that accepts to arrays. Iterate through each element of array comparing both values against a hash map while keeping track of the score. Tally the totals and print result.

def winner(deck1, deck2):
    # Facecard values.
    cardValues = {'A': 14, 'K': 13, 'Q': 12, 'J': 11, 'T': 10}
    # Player score counters.
    scoreDeck1 = 0
    scoreDeck2 = 0
    for card1, card2 in zip(deck1, deck2):
        # Convert face cards to values.
        val_card1 = cardValues.get(card1, int(card1))
        val_card2 = cardValues.get(card2, int(card2))
        # Compare values and update scores.
        if val_card1 > val_card2:
            scoreDeck1 +=1
        elif val_card1 < val_card2:
            scoreDeck2 +=1
    # Determine winner and return message.
    if scoreDeck1 > scoreDeck2:
        winner_msg = f"Deck 1 wins {scoreDeck1} to {scoreDeck2}"
    elif scoreDeck1 < scoreDeck2:
        winner_msg = f"Deck 2 wins {scoreDeck2} to {scoreDeck1}"
    else:
        winner_msg = "It's a tie" 
    return winner_msg