const choices = ["rock", "paper", "scissors"];
const pScore = document.getElementById("p-score");
const cScore = document.getElementById("c-score");
const playerChoiceDisplay = document.getElementById("playerChoiceDisplay");
const computerChoiceDisplay = document.getElementById("computerChoiceDisplay");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const rpsChoices = document.getElementById("choices");
const wOL = document.getElementById("wol");
const wOLText = document.getElementById("wol-text");


rock.onclick = () => {
    game("3", "rock");
}

paper.onclick = () => {
    game("3", "paper");
}

scissors.onclick = () => {
    game("3", "scissors");
}

wOL.onclick = () => {
    reset();
}


function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

function displayChoices(playerChoice, computerChoice) {
    playerChoiceDisplay.src = "Images/" + playerChoice + ".webp";
    computerChoiceDisplay.src = "Images/" + computerChoice + ".webp";
}

function setScore(winner) {
    if(winner === "player") {
        pScore.textContent++;
    } else if(winner === "computer") {
        cScore.textContent++;
    }
}

function endGame(winner) {
    rpsChoices.style.display = "none";
    wOL.style.display = "block";

    if(winner === "player") {
        wOLText.textContent = "you won!";
    } else if(winner === "computer") {
        wOLText.textContent = "you lost lol";
    }
}

function reset() {
    wOL.style.display = "none";
    rpsChoices.style.display = "flex";
    playerChoiceDisplay.src = "";
    computerChoiceDisplay.src = "";
    wOLText.textContent = "";
    pScore.textContent = 0;
    cScore.textContent = 0;
}

function playRound(playerChoice, computerChoice) {
    const outcomes = {"rock": {win: "scissors", lose: "paper"},
                      "paper": {win: "rock", lose: "scissors"},
                      "scissors": {win: "paper", lose: "rock"}}

    if(outcomes[playerChoice].win == computerChoice) {
        return "player";
    } else if(outcomes[playerChoice].lose == computerChoice) {
        return "computer";
    }
}

function game(rounds, playerChoice) {
    let computerChoice = getComputerChoice();
    setScore(playRound(playerChoice, computerChoice));
    displayChoices(playerChoice, computerChoice);

    if(pScore.textContent >= rounds) {
        endGame("player");
    } else if(cScore.textContent >= rounds) {
        endGame("computer");
    }
}