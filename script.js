let choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    const outcomes = {"rock": {win: "scissors", lose: "paper"},
                      "paper": {win: "rock", lose: "scissors"},
                      "scissors": {win: "paper", lose: "rock"}}

    if(playerSelection == computerSelection) {
        console.log("You Tied! " + playerSelection + " ties with " + computerSelection);
        playRound(prompt("Pick rock, paper, or scissors."), getComputerChoice());
    } else if(outcomes[playerSelection].win == computerSelection) {
                console.log("You Win! " + playerSelection + " beats " + computerSelection);
    } else if(outcomes[playerSelection].lose == computerSelection) {
                console.log("You Lose! " + playerSelection + " loses to " + computerSelection);
    } else {
        console.log("Choose either rock, paper, or scissors.");
        playRound(prompt("Pick rock, paper, or scissors"), getComputerChoice());
    }
}

//playRound(prompt("Pick rock, paper, or scissors"), getComputerChoice());

function game() {
    playRound(prompt("Pick rock, paper, or scissors"), getComputerChoice());
    playRound(prompt("Pick rock, paper, or scissors"), getComputerChoice());
    playRound(prompt("Pick rock, paper, or scissors"), getComputerChoice());
    playRound(prompt("Pick rock, paper, or scissors"), getComputerChoice());
    playRound(prompt("Pick rock, paper, or scissors"), getComputerChoice());
}

game();