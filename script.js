let globalHumanScore = 0;
let globalComputerScore = 0;
let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice() {
    let valid = false;
    let humanPlay;

    while (!valid) {
        let decision = parseInt(prompt("What do you want to play?\n1. Rock\n2. Paper\n3. Scissors"));

        switch (decision) {
            case 1:
                humanPlay = "Rock";
                valid = true;
                break;
            case 2:
                humanPlay = "Paper";
                valid = true;
                break;
            case 3:
                humanPlay = "Scissors";
                valid = true;
                break;
            default:
                alert("Invalid option");
        }
    }

    return humanPlay;
}

function playGame() {
    let playAgain = true;

    while (playAgain) {
        let roundsPlayed = 0;
        let log = "";
        let humanScore = 0;
        let computerScore = 0;

        function updateLog(roundsPlayed, computerPlay, humanPlay) {
            log += `Round ${roundsPlayed}:\n    Computer: ${computerPlay}\n    Human: ${humanPlay}\n`;
        }

        while (roundsPlayed < 5) {
            let humanPlay = getHumanChoice();
            let computerPlay = getComputerChoice();
            roundsPlayed += 1;

            function playRound(humanChoice, computerChoice) {

                switch (humanChoice) {
                    case "Rock":
                        if (computerChoice == "Rock") {
                            console.log(`It's a draw!`);
                        } else if (computerChoice == "Paper") {
                            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
                            computerScore += 1;
                        } else if (computerChoice == "Scissors") {
                            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
                            humanScore += 1;
                        }
                        break;

                    case "Paper":
                        if (computerChoice == "Paper") {
                            console.log(`It's a draw!`);
                        } else if (computerChoice == "Scissors") {
                            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
                            computerScore += 1;
                        } else if (computerChoice == "Rock") {
                            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
                            humanScore += 1;
                        }
                        break;

                    case "Scissors":
                        if (computerChoice == "Scissors") {
                            console.log(`It's a draw!`);
                        } else if (computerChoice == "Rock") {
                            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
                            computerScore += 1;
                        } else if (computerChoice == "Paper") {
                            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
                            humanScore += 1;
                        }
                        break;
                }
                updateLog(roundsPlayed, computerPlay, humanPlay);
            }
            playRound(humanPlay, computerPlay);
        }

        if (humanScore > computerScore) {
            globalHumanScore += 1;
        } else {
            globalComputerScore += 1;
        }

        console.log(log);
        console.log(`Match Score:\n    Human: ${humanScore}\n    Computer: ${computerScore}\n\nGlobal Score:\n    Human: ${globalHumanScore}\n    Computer: ${globalComputerScore}`);

        playAgain = confirm("Do you want to play again?");
    }
}

playGame();
