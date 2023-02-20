"use strict";

// document.querySelector(".message").textContent = "Correct number!🎉";
// document.querySelector(".number").textContent = 10;
// document.querySelector(".score").textContent = 15;
// console.log((document.querySelector(".guess").value = 15));
let secretNumber = Math.trunc(Math.random() * 100) + 1;
let keepScore = 20;
let highScore = 0;

const isLost = score => score === 0;

const highOrLow = function (guessNum, secretNum) {
  if (guessNum > secretNum) return "High ⬆️";
  else return "Low ⬇️";
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  let isGameOver = isLost(keepScore);
  if (isGameOver) {
    document.querySelector(".game-title").textContent = "💥 You lost! 😩";
    document.querySelector("body").style.backgroundColor = "#e44937";
  } else {
    if (!guess) {
      document.querySelector(".message").textContent = `❗️ Enter a number!`;
    } else if (guess === secretNumber) {
      document.querySelector("body").style.backgroundColor = "#35cd43";
      document.querySelector(".game-title").textContent = "🎊 You Won!! 🎊";
      document.querySelector(".message").textContent = `🎉 Correct Number`;
      document.querySelector(".number").textContent = secretNumber;
      document.querySelector(".number").style.width = "30rem";
      document.querySelector(".highscore").textContent = keepScore;
    } else {
      const checking = highOrLow(guess, secretNumber);
      keepScore--;
      document.querySelector(".score").textContent = keepScore;
      document.querySelector(".message").textContent = `Too ${checking}`;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  // window.location.reload();

  keepScore = 20;
  secretNumber = Math.trunc(Math.random() * 100) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = keepScore;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
