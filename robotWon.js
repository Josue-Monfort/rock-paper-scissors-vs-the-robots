const playAgainButton = document.querySelector("button")

playAgainButton.addEventListener("click", () => {
    window.location.href = `index.html`;
})

setTimeout(() => {
    document.body.classList.toggle("fade")
}, 1000)
