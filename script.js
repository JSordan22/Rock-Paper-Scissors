let choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if(playerSelection == "rock" && computerSelection == "rock" ||
       playerSelection == "paper" && computerSelection == "paper" ||
       playerSelection == "scissors" && computerSelection == "scissors") {
        console.log("You Tied! " + playerSelection + " ties with " + computerSelection);
        playRound(prompt("Pick rock, paper, or scissors"), getComputerChoice());
    } else if(playerSelection == "rock" && computerSelection == "scissors" ||
              playerSelection == "scissors" && computerSelection == "paper" ||
              playerSelection == "paper" && computerSelection == "rock") {
                console.log("You Win! " + playerSelection + " beats " + computerSelection);
    } else if(playerSelection == "rock" && computerSelection == "paper" ||
              playerSelection == "paper" && computerSelection == "scissors" ||
              playerSelection == "scissors" && computerSelection == "rock") {
                console.log("You Lose! " + playerSelection + " loses to " + computerSelection);
    }
}

playRound(prompt("Pick rock, paper, or scissors"), getComputerChoice());