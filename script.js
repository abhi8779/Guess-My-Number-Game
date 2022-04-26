'use strict';

/*Note : The style that we apply using is the inline style means its added in the element tag eg has highest priority
     : inline CSS > Internal CSS > Extternal CSS*/

let secretNumber = Math.trunc(Math.random() * 100 + 1);
let TotalScore = document.querySelector('.score').textContent;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

/*  ------------------------------------------------ when check button is pressed function----------------------------------------------------------------------------*/
document.querySelector('.check').addEventListener('click', function () {
  const inputFiledValue = Number(document.querySelector('.guess').value);
  //When there is no Input or 0;
  if (!inputFiledValue) {
    displayMessage('⚠️ No Number or 0');
  }

  // when the guess is correct.s
  else if (inputFiledValue === secretNumber) {
    displayMessage('🥳 Correct guess!');
    document.querySelector('body').style.background = '#60b347';
    document.querySelector('.number').style.width = '35rem';
    document.querySelector('.number').textContent = secretNumber;
    if (TotalScore > highScore) {
      highScore = TotalScore;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  //when guess is not correct.
  else if (inputFiledValue !== secretNumber) {
    if (TotalScore > 1) {
      displayMessage(
        inputFiledValue > secretNumber ? '⬆️ Too high!' : '⬇️ Too Low!'
      );
      TotalScore = document.querySelector('.score').textContent =
        TotalScore - 1;
    } else {
      displayMessage('Game over!');
      document.querySelector('body').style.background = 'red';
      document.querySelector('.number').style.width = '35rem';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.score').textContent = 0;
    }
  }
});
/*  ------------------------------------------------ Again button function------------------------------------------------------------------------------------*/

//when play Again is clicked
// document.querySelector('.again').addEventListener('click', function () {
//   location.reload();
// });

// game rest functionality.

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 10 + 1);
  TotalScore = 20;
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = TotalScore;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
