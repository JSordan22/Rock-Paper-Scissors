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
        return playRound(prompt("Pick rock, paper, or scissors"), getComputerChoice());
    } else if(outcomes[playerSelection].win == computerSelection) {
        console.log("You Win! " + playerSelection + " beats " + computerSelection);
        return 1;
    } else if(outcomes[playerSelection].lose == computerSelection) {
        console.log("You Lose! " + playerSelection + " loses to " + computerSelection);
        return 0;
    }
}

//playRound(prompt("Pick rock, paper, or scissors"), getComputerChoice());

function game(rounds) {
    let wins = 0;

    for(let i = 0; i < rounds; i++) {
        wins += playRound(prompt("Pick rock, paper, or scissors"), getComputerChoice());
    }

    if(wins >= Math.ceil(rounds/2)) {
        console.log("You won! you won " + wins + " rounds");
    } else {
        console.log("You lost! you lost " + (rounds-wins) + " rounds");
    }
    console.log(wins)
}

game(5);