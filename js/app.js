/**
 * This game is also widely called the pig game.
 * This is the logic for the game
 */

// I'll declare my global variables here
var scores, roundScores, activePlayer, dice;

// here I assign my global variables
scores = [0, 0];
roundScore = 0;
activePlayer = 0;

// dice rolls randomly from 1 to 6
dice = Math.floor(Math.random() * 6) + 1;

// The document gives user access to the DOM object and exposes various methods
// These methods can be used in DOM manipulation
// This querySelector method accepts a string and selects the first matching tag in the tree
// textContent sets the text in the tag to the assigned string
// inner html passes the assigned string as html children to the selector.
document.querySelector('#current-' + activePlayer).textContent = dice;
// document.querySelector('#current-' + activePlayer).innerHTML =
//   '<em>' + dice + '</em>';

// The value can also be stored in a variable
// to be used later
var x = document.querySelector('#score-0').textContent;
console.log(x);

// We can also change the styles of a tag
// this line will select the dice class and set it's display to none.
document.querySelector('.dice').style.display = 'none';
