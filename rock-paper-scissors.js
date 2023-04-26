const choices = ["rock", "paper", "scissors"];
const winners = [];
function game() {
    for(let i = 0; i < 5; i++) {
        playRound(i);
    }
    logWins();
}

function playRound(round) {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner);
    logRound(playerSelection, computerSelection, winner, round)
}


function playerChoice() {
    let input = prompt('Type rock, paper, or scissors');
    while (input == null) {
        input = prompt('Type rock, paper, or scissors');
    }
    input = input.toLowerCase();

    let check = validateInput(input);
    if (check == false) {
        input = prompt('Type rock, paper, or scissors. Spelling needs to be exact--capitalization does not matter');
        while (input == null) {
            input = prompt('Type rock, paper, or scissors');
        }
        input = input.toLowerCase();
        check = validateInput(input);

    }

    return input;
}

function computerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]
}
/* const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection)) */

function validateInput(choice) {
    return (choices.includes(choice));
}

function checkWinner(choiceP, choiceC){
    if(choiceP == choiceC) {
        return 'Tie';
    } else if((choiceP == "rock" && choiceC == "scissors") || (choiceP == "paper" && choiceC == "rock") || (choiceP == "scissors" && choiceC == "paper")) {
        return 'Player';
    } else {
      return 'Computer';  
    }
}

function logRound(playerChoice, computerChoice, winner, round) {
    console.log('Round:', round);
    console.log('Player Chose:', playerChoice);
    console.log('Computer Chose:', computerChoice);
    console.log(winner, 'won the round');
    console.log("-----------------------------------------------------------------");
}

function logWins(){
    let playerWins = winners.filter((item) => item == "Player").length;
    let computerWins = winners.filter((item) => item == "Computer").length;
    let ties = winners.filter((item) => item == "Tie").length;
    console.log('Results:');
    console.log('Player', playerWins);
    console.log('Computer Wins', computerWins);
    console.log('Ties', ties);
}


