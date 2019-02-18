// To run on command line:
// node water.js

// A straight-forward way to approach this problem would be to test each choice of a first can.
// One issue with that approach is that you have to test each choice until you find one that works.
// The solution below approaches the problem by considering where we want to end up--with the coconut-flavored water.
// From there, it's possible to determine where the most recently removed can of water should be in relation to the others.
// We can do this all the way back to the first can that was removed and thereby obtain our solution.

function coconut() {
    // Just before the coconut-flavored water is won, we will have two beverages left.
    var cans = ["gross beverage", "coconut"];

    // ind is the index we have to start counting at in order to
    // win the coconut-flavored beverage from whatever state the 'cans' array is in.
    // When there are two beverages left, ind = 0.
    var ind = 0;

    // For each other beverage that is taken from the fridge, we compute the index
    // that it has to be inserted at in order to win the coconut-flavored water.
    for (var i = 0; i < 11; i++) {
        // Move the index back 12 places, compute the result modulo the length of the 'cans' array.
        // Note that we have to do some extra operations to compute the modulo of a negative value.
        ind = (((ind - 12) % cans.length) + cans.length) % cans.length;
        
        // Insert can at ind in order to obtain previous state of the available beverages.
        cans.splice(ind, 0, "gross beverage");
    }

    return "Can #" + (ind + 1).toString();
}

console.log(coconut());