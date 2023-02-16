
  let player= 0;
let cpu=0;
function getComputerChoice() {
  const arr = ["Rock", "Paper", "Scissors"];
  let i = Math.floor(Math.random() * 3);
  return arr[i];
};
//game function
function game() {
  for (let index = 0; index < 5; index++) {
    const computerSelection = getComputerChoice();
    console.log(computerSelection);
    const playerSelection = prompt("Enter your option: ");
    playRound(playerSelection, computerSelection);
  console.log(`The player score is ${player}`);
  console.log(`The cpu score is ${cpu}`);
  }
(player>cpu)?console.log("player wins"):console.log("cpu wins");    
}


//function for each rounds
function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
    return;
    // return console.log(`You Tie! ${playerSelection} tie with ${computerSelection}`);
  }
  else if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "scissors") {
    return player+=1;
    // return console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
  }
  else if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "rock") {
     return player+=1;
    // return console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
  }
  else if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "paper") {
   return player+=1;
    // return console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
  }
  else {
return cpu+=1;
    // return console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
  }

}
game();
