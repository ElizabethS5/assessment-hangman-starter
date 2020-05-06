const letterInputElement = document.querySelector("#letter-input");
const letterSubmitButton = document.querySelector("#letter-submit-button");
const lettersAttemptedElement = document.querySelector("#letters-attempted");
const guessesLeftElement = document.querySelector("#guesses-left");
const messageElement = document.querySelector("#message");

const wordToGuessElement = document.querySelector("#word-to-guess");
const answer = word;
let current = `*`.repeat(word.length);
let remainingGuesses = 6;

wordToGuessElement.innerHTML = current;
guessesLeftElement.innerHTML = remainingGuesses;

letterSubmitButton.addEventListener("click", function () {
  let updateCurrent = "";
  let guess = letterInputElement.value;
  if (answer.toLowerCase().includes(guess)) {
    for (let i = 0; i < answer.length; i += 1) {
      if (guess.toLowerCase() === answer[i].toLowerCase()) {
        updateCurrent += answer[i];
      } else if (current[i] !== "*") {
        updateCurrent += answer[i];
      } else {
        updateCurrent += "*";
      }
    }
    current = updateCurrent;
    wordToGuessElement.innerHTML = current;
  } else {
    lettersAttemptedElement.innerHTML += guess;
    remainingGuesses--;
    guessesLeftElement.innerHTML = remainingGuesses;
  }
  letterInputElement.value = "";
  checkGameOver();
});

function checkGameOver() {
  if (current === answer) {
    messageElement.innerHTML = "You Won!";
    letterInputElement.disabled = true;
  }
  if (remainingGuesses === 0) {
    messageElement.innerHTML = "You Lost";
    letterInputElement.disabled = true;
  }
}
