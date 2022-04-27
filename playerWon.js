const playAgainButton = document.querySelector("button");
const congratulationDisplay = document.querySelector("#congratulationDisplay")

playAgainButton.addEventListener("click", () => {
    window.location.href = `index.html`;
})

setTimeout(() => {
    document.body.classList.toggle("fade")
}, 1000)

setInterval(() => {
    congratulationDisplay.classList.toggle("fade")
}, 1500)