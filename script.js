
function getComputerChoice() {
  const arr = ["Rock", "Paper", "Scissors"];
  let i = Math.floor(Math.random() * 3);
  console.log(arr[i]);
  return arr[i];
};

function playRound(playerSelection, computerSelection) {
if (playerSelection==computerSelection) {
  return console.log("You win");
}
else {return console.log("You lose");}

}
const computerSelection = getComputerChoice();
const playerSelection = prompt("Enter your option: ");
playRound(playerSelection,computerSelection);
