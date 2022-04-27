const allHandsButtons = document.querySelectorAll(".buttons"); // selects all the rock paper scissors buttons at the bottom
const resultDisplay = document.querySelector("#resultDisplay");

// Adds a click event listener to all buttons
allHandsButtons.forEach(button => {
    // will get the player choice when they click the button
    button.addEventListener("click", (playerChoice) => {
        getRoundResult(playerChoice.target.id, getRobotChoice())
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
    resultDisplay.textContent = "Robot won this round!";
    resultDisplay.style.color = "red";
}

// No winner this round
function drawRound() {
    resultDisplay.textContent = "Neither side won, it's a tie!";
    resultDisplay.style.color = "black";
}

// Will get the player input and compare with the robot choice
// then it will evaluate and show the result.
function getRoundResult(playerChoice, robotChoice) {
    if (playerChoice === robotChoice) {
        return drawRound();
    }
    if (playerChoice === "rock" && robotChoice === "scissors") {
        return playerWonRound();
    } 
    if (playerChoice === "rock" && robotChoice === "paper") {
        return robotWonRound();
    }
    if (playerChoice === "paper" && robotChoice === "scissors") {
        return robotWonRound();
    }
    if (playerChoice === "paper" && robotChoice === "rock") {
        return playerWonRound();
    }
    if (playerChoice === "scissors" && robotChoice === "paper") {
        return playerWonRound();
    }
    if (playerChoice === "scissors" && robotChoice === "rock") {
        return robotWonRound();
    }
}