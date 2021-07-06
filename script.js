"use strict";

let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

function decrementAndUpdateScore() {
  score--;
  document.querySelector(".score").textContent = score;
}

function checkScoreValue() {
  document.querySelector(".message").textContent = "You lost the game";
  decrementAndUpdateScore();
}

//Check functionality
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (score) {
    if (!guess) {
      document.querySelector(".message").textContent = "No Number";
      decrementAndUpdateScore();
    } else if (guess === secretNumber) {
      document.querySelector(".number").textContent = guess;
      document.querySelector(".message").textContent = "Correct Number";
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";
      if (score > highscore) {
        highscore = score;
        document.querySelector(".highscore").textContent = score;
      }
    } else if (guess !== secretNumber) {
      if (score > 1) {
        document.querySelector(".message").textContent =
          guess > secretNumber ? "Too High !!!" : "Too Low !!!";
        decrementAndUpdateScore();
      } else {
        checkScoreValue();
      }
    }
  }
});

//Reset button functionality
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start guessing";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";
});
