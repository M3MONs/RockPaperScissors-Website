var buttons = document.querySelectorAll(".player-move");
const resultContainer = document.getElementById("resultContainer");
const restartBtn = document.getElementById("restartBtn");

let player = 0,
   computer = 0;

addButtonsEvents();

// ADD BUTTONS EVENTS
function addButtonsEvents() {
   buttons.forEach((btn) => {
      btn.addEventListener("click", playerClick);
   });
}

function removeButtonsEvents() {
   buttons.forEach((btn) => {
      btn.removeEventListener("click", playerClick);
   });
}
// GET DATA VALUE
function playerClick(event) {
   var move = parseInt(event.target.getAttribute("data-value"));
   playerChoice(move);
}

// COMPUTER RANDOM CHOICE
function computerChoice() {
   var computerValue = Math.floor(Math.random() * 3 + 1);
   return computerValue;
}

// PLAYER CHOICE
function playerChoice(playerValue) {
   resultContainer.innerHTML = "";
   var computerValue = computerChoice();

   if (playerValue == computerValue) {
      displayResult("DRAW");
   } else if (
      (playerValue == 1 && computerValue == 2) ||
      (playerValue == 2 && computerValue == 3) ||
      (playerValue == 3 && computerValue == 1)
   ) {
      player++;
      displayResult("PLAYER WON");
   } else {
      computer++;
      displayResult("COMPUTER WON");
   }
}

// DISPLAY RESULT
function displayResult(result) {
   resultContainer.innerHTML = `<h1>${result}</h1><h2>${player}:${computer}</h2>`;
   if (player == 3 || computer == 3) {
      removeButtonsEvents();
      restartBtn.classList.add("show");
   }
}

// RESTART GAME
restartBtn.addEventListener("click", function () {
   resultContainer.innerHTML = "";
   this.classList.remove("show");
   player = 0;
   computer = 0;
   addButtonsEvents();
});
