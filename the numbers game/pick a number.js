var randomNum = Math.floor(Math.random() * 10) + 1;
var active = true


function guessNumber() {

    var guess = prompt("GUESS! the magic number from 1 to 10");
    checkAnswer(guess);
}

function checkAnswer(guess) {
    while (active) {
        if (parseInt(guess) > randomNum) {
            alert('too high please try again.');
            guessNumber();
        } else if (parseInt(guess) < randomNum) {
            alert('too low please try again.');
            guessNumber();
        } else if (guess == randomNum) {
            alert('Bingo!');
            active = false;
        } else {
            alert("Invalid input. Please try again.");
            guessNumber();
        }
    }
}