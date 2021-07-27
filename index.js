var buttons = document.querySelectorAll(".player-move");
const resultContainer = document.getElementById("result-container");

let player = 0,
   computer = 0;

// ADD BUTTONS EVENTS
buttons.forEach((btn) => {
   btn.addEventListener("click", function (event) {
      var move = parseInt(event.target.getAttribute("data-value"));
      playerChoice(move);
   });
});

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
      displayResult("PLAYER WIN");
   } else {
      computer++;
      displayResult("COMPUTER WIN");
   }
}

// DISPLAY RESULT
function displayResult(result) {
   resultContainer.innerHTML = `<h1>${result}</h1><h2>${player}:${computer}</h2>`;
}
