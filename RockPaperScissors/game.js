const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


function getComputerChoice() {
    const randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
};


function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      return "It's a tie!";
    } else if (humanChoice === "rock") {
      if (computerChoice === "scissors") {
        return "You win! Rock crushes scissors.";
      } else {
        return "You lose! Paper covers rock.";
      }
    } else if (humanChoice === "paper") {
      if (computerChoice === "rock") {
        return "You win! Paper covers rock.";
      } else {
        return "You lose! Scissors cut paper.";
      }
    } else if (humanChoice === "scissors") {
      if (computerChoice === "paper") {
        return "You win! Scissors cut paper.";
      } else {
        return "You lose! Rock crushes scissors.";
      }
    } else {
      return "Invalid input. Please choose rock, paper, or scissors.";
    }
  };

function game () {
    readline.question("Choose rock, paper or scissors: ", (humanChoice) => {
        humanChoice = humanChoice.toLowerCase();
        const computerChoice = getComputerChoice();
        const result = playRound(humanChoice, computerChoice);
        console.log(result);
        readline.close()
    });
}
game();