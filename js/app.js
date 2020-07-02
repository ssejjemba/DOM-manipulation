/**
 * This game is also widely called the pig game.
 * This is the logic for the game
 */

// I'll declare my global variables here
var scores, roundScore, activePlayer, isFinished;

// here I assign my global variables
function init() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  isFinished = false;
  // textContent sets the text in the tag to the assigned string
  // inner html passes the assigned string as html children to the selector.
  // document.querySelector('#current-' + activePlayer).textContent = dice;
  // document.querySelector('#current-' + activePlayer).innerHTML =
  //   '<em>' + dice + '</em>';

  // The value can also be stored in a variable
  // to be used later
  // var x = document.querySelector('#score-0').textContent;
  // console.log(x);

  // We can also change the styles of a tag
  // this line will select the dice class and set it's display to none.
  document.querySelector('.dice').style.display = 'none';

  // We can also get element by it's id attribute using the following method
  // here we reset all score boards to 0
  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';

  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');
}

init();

// The document gives user access to the DOM object and exposes various methods
// These methods can be used in DOM manipulation
// This querySelector method accepts a string and selects the first matching tag in the tree

function switchPlayer() {
  // Next player
  activePlayer = activePlayer === 1 ? 0 : 1;
  roundScore = 0;

  // reset the current score boards to 0
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  // toggle active class to change styles on player panel
  // if class is on it'll be removed else it'll be added
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  // hide dice
  document.querySelector('.dice').style.display = 'none';
}

// We can also add event listeners to perform functions when they occur
// the first arg is the type of event
// the second arg is the callback function that will run when the event happens
document.querySelector('.btn-roll').addEventListener('click', function () {
  if (isFinished) {
    return;
  }
  // 1. Random number
  // dice rolls randomly from 1 to 6
  var dice = Math.floor(Math.random() * 6) + 1;

  // 2. Display result
  var diceDOM = document.querySelector('.dice');
  diceDOM.style.display = 'block';
  diceDOM.src = 'assets/dice-' + dice + '.png';

  // 3. Update the round score if the rolled number was NOT a 1
  if (dice > 1) {
    // Add score
    roundScore += dice;
    document.getElementById('current-' + activePlayer).textContent = roundScore;
  } else {
    switchPlayer();
  }
});

document.querySelector('.btn-hold').addEventListener('click', function () {
  if (isFinished) {
    return;
  }
  // Add CURRENT score to global score
  scores[activePlayer] += roundScore;

  // update the UI
  document.querySelector('#score-' + activePlayer).textContent =
    scores[activePlayer];

  //check if player won the game
  if (scores[activePlayer] >= 100) {
    isFinished = true;
    //Active player has won the game
    document.getElementById('name-' + activePlayer).textContent = 'Winner!';
    document.querySelector('.dice').style.display = 'none';

    document
      .querySelector('.player-' + activePlayer + '-panel')
      .classList.add('winner');
    document
      .querySelector('.player-' + activePlayer + '-panel')
      .classList.remove('active');
  } else {
    //next player
    switchPlayer();
  }
});

document.querySelector('.btn-new').addEventListener('click', init);
