const allHandsButtons = document.querySelectorAll(".buttons"); // selects all the rock paper scissors buttons at the bottom
const resultDisplay = document.querySelector("#resultDisplay");

// Adds a click event listener to all buttons
allHandsButtons.forEach(button => {
    // will get the player choice when they click the button
    button.addEventListener("click", (playerChoice) => {
        console.log(playerChoice.target.id);
        drawRound()
    })
})

// Makes a random choice between rock, paper and scissors
function getRobotChoice() {
    const possibleChoices = ["rock", "paper", "scissors"];
    let randomChoice = Math.floor(Math.random() * possibleChoices.length);
    return possibleChoices[randomChoice];
}

// Makes the display show the result: player won
function playerWonRound() {
    resultDisplay.textContent = "Player won this round!";
    resultDisplay.style.color = "green";
}

// Makes the display show the result: robot won
function robotWonRound() {
    resultDisplay.textContent = "Robot won this round!"
    resultDisplay.style.color = "red";
}

// No winners this round
function drawRound() {
    resultDisplay.textContent = "Neither side won, it's a tie!"
    resultDisplay.style.color = "black";
}