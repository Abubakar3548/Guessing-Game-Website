let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 3;

document.getElementById('submitGuess').addEventListener('click', function() {
    let guessInput = document.getElementById('guessInput');
    let guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        document.getElementById('message').textContent = 'Please enter a valid number between 1 and 100.';
        return;
    }

    attempts--;

    if (guess === randomNumber) {
        document.getElementById('message').textContent = `Congratulations! You guessed the right number: ${randomNumber}`;
        document.getElementById('submitGuess').disabled = true;
    } else if (guess < randomNumber) {
        document.getElementById('message').textContent = 'Too low! Try again.';
    } else {
        document.getElementById('message').textContent = 'Too high! Try again.';
    }

    if (attempts === 0 && guess !== randomNumber) {
        document.getElementById('message').textContent = `Game over! The correct number was: ${randomNumber}`;
        document.getElementById('submitGuess').disabled = true;
    }

    document.getElementById('chances').textContent = `Chances left: ${attempts}`;
    guessInput.value = '';
});