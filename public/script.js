
let player= 0;
let cpu=0;
function getComputerChoice() {
    const arr = ["Rock", "Paper", "Scissors"];
    let i = Math.floor(Math.random() * 3);
    return arr[i];
};

const div = document.querySelector('.context');
const pscore= document.querySelector('.pscore');
const cpuscore= document.querySelector('.cpuscore');
const result= document.querySelector('.result');

const Rock = document.querySelector('.rock');
const Paper= document.querySelector('.paper');
const Scissors= document.querySelector('.sci');
const playagain = document.querySelector('.playagain')

function Result(){
if(player===5 || cpu===5){
        if(player>cpu){
            result.textContent = " Player win";
    displayReset()
        }else{
            result.textContent = " Cpu win";
    displayReset()
        }

    }
}

function displayReset(){
    playagain.classList.add("btn")
    playagain.textContent= "Play Again";
}
playagain.addEventListener('click',()=>{
    player = 0;
    cpu=0;
cpuscore.textContent = "";
pscore.textContent = "";
    result.textContent="";
    div.textContent="";
    playagain.textContent="";
    playagain.classList.remove("btn")
})


Rock.addEventListener('click',()=>{

    let computerSelection = getComputerChoice();
    playRound(Rock.textContent,computerSelection)
    cpuscore.textContent = `Cpu : ${cpu}`;
    pscore.textContent = `Player : ${player}`;
    Result();
});

Paper.addEventListener('click',()=>{

    let computerSelection = getComputerChoice();
    playRound(Paper.textContent,computerSelection)
    cpuscore.textContent = `Cpu : ${cpu}`;
    pscore.textContent = `Player : ${player}`;
    Result();
    });

Scissors.addEventListener('click',()=>{

    let computerSelection = getComputerChoice();
    playRound(Scissors.textContent,computerSelection)
    cpuscore.textContent = `Cpu : ${cpu}`;
    pscore.textContent = `Player : ${player}`;
    Result();

});



//game function
//function game() {
    //for (let index = 0; index < 5; index++) {
        //console.log(computerSelection);
        //const playerSelection = prompt("Enter your option: ");
        // playRound(playerSelection, computerSelection);
        //console.log(`The player score is ${player}`);
        //console.log(`The cpu score is ${cpu}`);
        //}
    //(player>cpu)?console.log("player wins"):console.log("cpu wins");
    //}



//function for each rounds
function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        //return;
        div.textContent = `You Tie! ${playerSelection} tie with ${computerSelection}`;
        // return console.log(`You Tie! ${playerSelection} tie with ${computerSelection}`);
    }
    else if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "scissors") {
        //return player+=1;
        player+=1;
        div.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
        //return console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
    }
    else if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "rock") {
        //return player+=1;
        player+=1;
        div.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
        //return console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
    }
    else if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "paper") {
        //return player+=1;
        player+=1;
        div.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
        //return console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
    }
    else {
        //return cpu+=1;
        cpu+=1;
        div.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
        //return console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
    }

}
