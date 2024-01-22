let choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

function getPlayerChoice() {
    let playerChoice = prompt("Pick rock, paper, or scissors");

    if(choices.includes(playerChoice)) {
        return playerChoice.toLowerCase();
    } else if(playerChoice == null) {
        return null;
    } else {
        return getPlayerChoice();
    }
}

function playRound(playerSelection, computerSelection) {
    const outcomes = {"rock": {win: "scissors", lose: "paper"},
                      "paper": {win: "rock", lose: "scissors"},
                      "scissors": {win: "paper", lose: "rock"}}

    if(playerSelection == computerSelection) {
        console.log("You Tied! " + playerSelection + " ties with " + computerSelection);
        return playRound(getPlayerChoice(), getComputerChoice());
    } else if(outcomes[playerSelection].win == computerSelection) {
        console.log("You Win! " + playerSelection + " beats " + computerSelection);
        return 1;
    } else if(outcomes[playerSelection].lose == computerSelection) {
        console.log("You Lose! " + playerSelection + " loses to " + computerSelection);
        return 0;
    }
}

function game(rounds) {
    let wins = 0;

    for(let i = 0; i < rounds; i++) {
        wins += playRound(getPlayerChoice(), getComputerChoice());
    }

    if(wins >= Math.ceil(rounds/2)) {
        console.log("You won! you won " + wins + " rounds");
    } else {
        console.log("You lost! you lost " + (rounds-wins) + " rounds");
    }
}

game(5);