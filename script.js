
function getComputerChoice() {
  const arr = ["Rock", "Paper", "Scissors"];
  let i = Math.floor(Math.random() * 3);
  console.log(arr[i]);
  return arr[i];
};

function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
    return console.log(`You Tie! ${playerSelection} tie with ${computerSelection}`);
  }
  else if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "scissors") {
    return console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
  }
  if (playerSelection.toLowerCase()=="paper"&& computerSelection.toLowerCase()=="rock") {
    return console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
  }
 if (playerSelection.toLowerCase()=="scissors"&& computerSelection.toLowerCase()=="paper") {
    return console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
  }
  else{
    return console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
  }

}
const computerSelection = getComputerChoice();
const playerSelection = prompt("Enter your option: ");
playRound(playerSelection, computerSelection);
