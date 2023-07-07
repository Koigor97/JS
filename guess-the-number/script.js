'use strict';

// Getting the html elements
const theH1 = document.querySelector('.the-h1');
const message = document.querySelector('.message');
let theScore = document.querySelector('.score');
let theHighScore = document.querySelector('.highscore');
const guess =document.querySelector('.guess');
const hiddenNum = document.querySelector('.number');

// the buttons and input field
const againBtn = document.querySelector('.again');
const checkBtn = document.querySelector('.check');

// the score
let score = 20
let highScore = 0

// List of giphy for user experience
const theGiphy = ["https://i.gifer.com/naT.gif","https://i.gifer.com/cB1.gif"]

// creating a function for generating a random number from 1 - 100
const generateRandom = () => Math.trunc((Math.random() * 100) + 1)
// assigning it to a variable called secretNum
let secretNum = generateRandom();

// This function check if the user guess is correct. If it is the user wins, if not loser losses a score
const isGuessCorrect = function(userGuess, secretNumber) {
    if (userGuess === secretNumber) {
        document.body.classList.add('the-winner')
        theH1.textContent = `🍾 You Guessed Right... 🎉`;
        hiddenNum.textContent = secretNumber;
        highScore += score;
        theHighScore.textContent = highScore;
        checkBtn.classList.add('grayed-out');
        checkBtn.disabled = true;
    }
}

// This function checks if the user guess is higher or lower than the secret number
const isHigherOrLower = function (userGuess, secretNumber) {
    if (userGuess > secretNumber) {
        message.textContent = `Guess lower ⬇️`;
        score--
    } else if (userGuess < secretNumber) {
        message.textContent = `Guess higher ⬆️`;
        score--
    }
    theScore.textContent = score;
    ifScoreisZero(score);
}

const resetGame = function() {
    document.body.classList.remove('the-winner')
     document.body.classList.remove('loser')
    theH1.textContent = `Guess The Number`;
    hiddenNum.textContent = '?';
    checkBtn.classList.remove('grayed-out');
    checkBtn.disabled = false;
    message.textContent = "Start guessing...";
    score = 20
    theScore.textContent = score;
    guess.value = " ";
}

const ifScoreisZero = function(check_score) {
    if (check_score < 1) {
        checkBtn.disabled = true;
        theH1.textContent = `You Lost 😭😭😭`;
        hiddenNum.textContent = secretNum;
        document.body.classList.add('loser')
        checkBtn.classList.add('grayed-out');
        message.textContent = "The number was 👆🏽"
    }
}

checkBtn.addEventListener('click', function() {
    isGuessCorrect(Number(guess.value), secretNum);
    isHigherOrLower(Number(guess.value), secretNum);
})

againBtn.addEventListener('click', function() {
    resetGame();
    secretNum = generateRandom();
    
})
