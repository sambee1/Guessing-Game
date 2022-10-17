document.querySelector(".start").addEventListener("click",  guessNumber
)

function guessNumber(range) {
  const username = window.prompt("What is your username?");
  range = 2;

  for (let tries = 3; tries > 0;) {
    const randomNumber = Math.ceil(Math.random() * range);
    const guess =
      window.prompt(
        `Hello ${username}\nYou have ${tries} tries left\n Guess the number between 1 and ${range}`
      ) * 1;
    if (guess == randomNumber) {
      range++;
      
    } else {

      tries--;
    }
    if (tries == 0) return window.alert("Game Over!!!");
  }
}

