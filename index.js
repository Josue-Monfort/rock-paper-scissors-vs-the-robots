const allHandsButtons = document.querySelectorAll(".buttons"); // selects all the rock paper scissors buttons at the bottom
const resultDisplay = document.querySelector("#resultDisplay");
const playerPointsDisplay = document.querySelector("#playerPointsDisplay"); // PLAYER POINTS
const robotPointsDisplay = document.querySelector("#robotPointsDisplay"); // ROBOT POINTS
const playerSpeechDisplay = document.querySelector("#normalBubbleImg"); // PLAYER SPEECH BUBBLE
const robotSpeechDisplay = document.querySelector("#reverseBubbleImg"); // ROBOT SPEECH BUBBLE

let playerPoints = 0;
let robotPoints = 0;

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

// Makes the display show the result: PLAYER WON
function playerWonRound(playerChoice, robotChoice) {
    playerPoints++;
    playerPointsDisplay.textContent = playerPoints;
    playerPointsDisplay.style.color = "green"
    robotPointsDisplay.style.color = "red"
    resultDisplay.textContent = "Player won this round!";
    resultDisplay.style.color = "green";
    playerSpeechDisplay.setAttribute("src", `img/speech/speech-win-${playerChoice}.png`)
    robotSpeechDisplay.setAttribute("src", `img/speech/speech-lose-${robotChoice}.png`)
}

// Makes the display show the result: ROBOT WON
function robotWonRound(playerChoice, robotChoice) {
    robotPoints++;
    robotPointsDisplay.textContent = robotPoints;
    playerPointsDisplay.style.color = "red"
    robotPointsDisplay.style.color = "green"
    resultDisplay.textContent = "Robot won this round!";
    resultDisplay.style.color = "red";
    playerSpeechDisplay.setAttribute("src", `img/speech/speech-lose-${playerChoice}.png`)
    robotSpeechDisplay.setAttribute("src", `img/speech/speech-win-${robotChoice}.png`)
}

// No winners this round
function drawRound(playerChoice, robotChoice) {
    resultDisplay.textContent = "Neither side won, it's a tie!";
    resultDisplay.style.color = "black";
    playerPointsDisplay.style.color = "black"
    robotPointsDisplay.style.color = "black"
    playerSpeechDisplay.setAttribute("src", `img/speech/speech-lose-${playerChoice}.png`)
    robotSpeechDisplay.setAttribute("src", `img/speech/speech-lose-${robotChoice}.png`)
}

// Will get the player input and compare with the robot choice
// then it will evaluate and show the result.
function getRoundResult(playerChoice, robotChoice) {
    if (playerChoice === robotChoice) {
        return drawRound(playerChoice, robotChoice);
    }
    if (playerChoice === "rock" && robotChoice === "scissors") {
        return playerWonRound(playerChoice, robotChoice);
    } 
    if (playerChoice === "rock" && robotChoice === "paper") {
        return robotWonRound(playerChoice, robotChoice);
    }
    if (playerChoice === "paper" && robotChoice === "scissors") {
        return robotWonRound(playerChoice, robotChoice);
    }
    if (playerChoice === "paper" && robotChoice === "rock") {
        return playerWonRound(playerChoice, robotChoice);
    }
    if (playerChoice === "scissors" && robotChoice === "paper") {
        return playerWonRound(playerChoice, robotChoice);
    }
    if (playerChoice === "scissors" && robotChoice === "rock") {
        return robotWonRound(playerChoice, robotChoice);
    }
}