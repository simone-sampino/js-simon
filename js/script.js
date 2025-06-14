/* Descrizione: Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.

Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.

BONUS:
Inseriamo la validazione: se l'utente mette due numeri uguali o inserisce cose diverse da numeri lo blocchiamo in qualche modo.
Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.

Consigli del giorno:
Pensate prima in italiano.
Dividete in piccoli problemi la consegna.
Individuate gli elementi di cui avete bisogno per realizzare il programma.
Immaginate la logica come fosse uno snack: "Dati 2 array di numeri, indica quali e quanti numeri ci sono in comune tra i due array" */

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
let seconds = 5;
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
