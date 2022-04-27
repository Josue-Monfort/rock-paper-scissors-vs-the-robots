const allHandsButtons = document.querySelectorAll(".buttons") // selects all the rock paper scissors buttons at the bottom

// Adds a click event listener to all buttons
allHandsButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        console.log(e.target.id)
    })
})

// Makes a random choice between rock, paper and scissors
function getRobotChoice() {
    const possibleChoices = ["rock", "paper", "scissors"];
    let randomChoice = Math.floor(Math.random() * possibleChoices.length);
    return possibleChoices[randomChoice];
}