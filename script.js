//Global variables
let globalHumanScore = 0;
let globalComputerScore = 0;
let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
const tab = "&nbsp;&nbsp;&nbsp;&nbsp;";
let log = "";


//Randomly chooses computer play
function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    let computerPlay = "";

    if (random == 0) {
        computerPlay = "Rock";
    } else if (random == 1) {
        computerPlay = "Paper";
    } else if (random == 2) {
        computerPlay = "Scissors";
    }

    return computerPlay;
}

//Get Human Play everytime a play button is clicked
const humanButtons = document.querySelectorAll(".human");
function getHumanPlay(e) {
    let humanPlay = e.target.classList[0];
    playRound(humanPlay, getComputerChoice());
}
humanButtons.forEach((button) => button.addEventListener("click", getHumanPlay));


//Gets score page elements and stores them in variables
const pageGlobalScore = document.createElement("p");
const pageCurrentGameScore = document.createElement("p");
const pageRoundCounter = document.createElement("p");



//Plays a round
function playRound(humanChoice, computerChoice) {

    roundsPlayed += 1;

    //Function to add a line to the log, creates a p element and styles it and populates it
    //TODO: New lines are added at the top of the log area, idea is that new lines are added at the bottom and other lines scroll up, so most recent log will always be the bottom one
    function addLogLine(text) {
        const pageLog = document.createElement("p");
        pageLog.style.borderColor = "gray";
        pageLog.style.borderStyle = "solid";
        pageLog.style.borderWidth = "1px";
        pageLog.innerHTML = text;
        document.getElementById("log").appendChild(pageLog);
    }
    //Update log after each round. Also updates current score, global score and round counter
    function updateLog(roundsPlayed, computerPlay, humanPlay) {

        addLogLine(`Round ${roundsPlayed}:\n    Computer: ${computerChoice}\n    Human: ${humanChoice}\n`);

        pageGlobalScore.textContent = `Human: ${globalHumanScore}\n    Computer: ${globalComputerScore}`;
        pageCurrentGameScore.textContent = `Human: ${humanScore}\n    Computer: ${computerScore}`;
        pageRoundCounter.textContent = `${roundsPlayed}`


        document.getElementById("global-score").appendChild(pageGlobalScore);
        document.getElementById("current-game-score").appendChild(pageCurrentGameScore);
        document.getElementById("round-counter").appendChild(pageRoundCounter);

    }

    //Saves both human and computer choice in a variable
    let humanPlay = getHumanPlay;
    let computerPlay = getComputerChoice();

    //Logic for the round
    switch (humanChoice) {
        case "Rock":
            if (computerChoice == "Rock") {
                addLogLine(`It's a draw!<br>`);
            } else if (computerChoice == "Paper") {
                addLogLine(`You lose! ${computerChoice} beats ${humanChoice}<br>`);
                computerScore += 1;
            } else if (computerChoice == "Scissors") {
                addLogLine(`You win! ${humanChoice} beats ${computerChoice}<br>`);
                humanScore += 1;
            }
            break;

        case "Paper":
            if (computerChoice == "Paper") {
                addLogLine(`It's a draw!<br>`);
            } else if (computerChoice == "Scissors") {
                addLogLine(`You lose! ${computerChoice} beats ${humanChoice}<br>`);
                computerScore += 1;
            } else if (computerChoice == "Rock") {
                addLogLine(`You win! ${humanChoice} beats ${computerChoice}<br>`);
                humanScore += 1;
            }
            break;

        case "Scissors":
            if (computerChoice == "Scissors") {
                addLogLine(`It's a draw!<br>`);
            } else if (computerChoice == "Rock") {
                addLogLine(`You lose! ${computerChoice} beats ${humanChoice}<br>`);
                computerScore += 1;
            } else if (computerChoice == "Paper") {
                addLogLine(`You win! ${humanChoice} beats ${computerChoice}<br>`);
                humanScore += 1;
            }
            break;
    }

    //Starts a new game after 5 rounds
    //TODO: Add a button to start a new game. Need better game termination
    if (roundsPlayed == 5) {
        roundsPlayed = 0;
        humanScore = 0;
        computerScore = 0;
        if (humanScore > computerScore) {
            globalHumanScore += 1;
        } else {
            globalComputerScore += 1;
        }
    }

    //Updates log
    updateLog(roundsPlayed, computerPlay, humanPlay);
}