// select dom elements
const countdownEl = document.getElementById("countdown");
const instructionsEl = document.getElementById("instructions");
const listNumbersEl = document.getElementById("numbers-list");
const formEl = document.getElementById("answers-form");
const inputEl = document.querySelectorAll("input");
const btnEl = document.querySelector(".btn");
const messageEl = document.getElementById("message");

// print random numbers
const randomNumbers = [];

for (let i = 0; i < 5; i++) {
  randomNumbers.push(Math.floor(Math.random() * 50) + 1);
}
listNumbersEl.innerText = randomNumbers.join(", ");

// add 30sec timer to hide numbers
let seconds = 30;
const limit = 0;

const timer = setInterval(() => {
  countdownEl.innerText = seconds;

  seconds--;

  if (seconds < limit) {
    clearInterval(timer);
    listNumbersEl.innerText = "";
    instructionsEl.innerText =
      "Tempo scaduto! Inserisci i numeri visualizzati.";
    formEl.classList.remove("d-none");
  }
}, 1000);

// verify how many numbers were guessed
formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  const guess = [];

  for (let i = 0; i < inputEl.length; i++) {
    const answer = Number(inputEl[i].value);

    if (randomNumbers.includes(answer)) {
      guess.push(answer);
    }
  }

  messageEl.innerText = `Hai indovinato ${guess.length} numeri! Sono: ${guess}`;
});
