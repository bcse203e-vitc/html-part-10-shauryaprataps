
const secretNumber = Math.floor(Math.random() * 50) + 1;
let guess;

function checkGuess() {
    guess = parseInt(document.getElementById("guessInput").value, 10);
    const message = document.getElementById("message");

    if (isNaN(guess) || guess < 1 || guess > 50) {
        message.innerText = "Please enter a valid number between 1 and 50.";
        message.style.color = "red";
    } else if (guess < secretNumber) {
        message.innerText = "Too low! Try again.";
        message.style.color = "blue";
    } else if (guess > secretNumber) {
        message.innerText = "Too high! Try again.";
        message.style.color = "blue";
    } else {
        message.innerText = `🎉 Congratulations! ${secretNumber} is the correct number!`;
        message.style.color = "green";
        document.getElementById("guessInput").disabled = true;
    }
}
