const choices = ["rock", "paper", "scissors"];
let winners = [];
// const buttons = document.querySelectorAll('button');

function resetGame() {
    winners = []
    document.querySelector('.playerScore').textContent = 'Score: 0'
    document.querySelector('.computerScore').textContent = 'Score: 0'
    document.querySelector('.ties').textContent = 'Ties: 0'
    document.querySelector('.winner').textContent = ''
    document.querySelector('.playerChoice').textContent = ''
    document.querySelector('.computerChoice').textContent = ''
    document.querySelector('.reset').style.display = 'none'

}

// function game() {
//     for(let i = 0; i < 5; i++) {
//         playRound(i);
//     }
//     logWins();
// }

function game() {
    let imgs = document.querySelectorAll('img')
    imgs.forEach((img) =>
        img.addEventListener('click', () => {
            if (img.id) {
                playRound(img.id)
            }
            })
        );
    
}

function playRound(playerSelection) {
    let wins = checkWins();
    if (wins >= 5) {
        return;
    }

    const computerSelection = computerChoice();

    const winner = checkWinner(playerSelection, computerSelection);

    winners.push(winner);
    tallyWins();
    displayRound(playerSelection, computerSelection, winner);
    wins = checkWins();
    if (wins == 5) {
        displayEnd();
    }
};

function displayEnd() {
    let playerWins = winners.filter((item) => item == "Player").length;
    if (playerWins == 5) {
        document.querySelector('.winner').textContent = 'You won 5 games. Congrats!'
    } else {
        document.querySelector('.winner').textContent = 'Sorry, the computer wins 5 times'
    }
    document.querySelector('.reset').style.display = "flex"
};

function displayRoundWinner(winner) {
    if (winner == 'Player') {
        document.querySelector('.winner').textContent = 'You won the round!'
    } else if (winner == 'Computer') {
        document.querySelector('.winner').textContent = 'Computer won the round'
    } else {
        document.querySelector('.winner').textContent = 'The round was a tie!'
    }
};

function displayRound(playerSelection, computerSelection, winner) {
    document.querySelector('.playerChoice').textContent = `You chose ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}`;
    document.querySelector('.computerChoice').textContent = `The computer chose ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`;
    document.querySelector('.winner').textContent = `Round Winner: ${winner}`
};

function tallyWins() {
    let playerWins = winners.filter((item) => item == "Player").length;
    let computerWins = winners.filter((item) => item == "Computer").length;
    let ties = winners.filter((item) => item == "Tie").length;
    document.querySelector('.playerScore').textContent = `Score: ${playerWins}`
    document.querySelector('.computerScore').textContent = `Score: ${computerWins}`
    document.querySelector('.ties').textContent = `Score: ${ties}`
}

// logRound(playerSelection, computerSelection, winner, round)



function playerChoice() {

}

 function computerChoice() {
// todo-update the DOM with the computer selection    
     return choices[Math.floor(Math.random() * choices.length)]
 };



function checkWinner(choiceP, choiceC) {
    if (choiceP == choiceC) {
        return 'Tie';
    } else if ((choiceP == "rock" && choiceC == "scissors") || (choiceP == "paper" && choiceC == "rock") || (choiceP == "scissors" && choiceC == "paper")) {
        return 'Player';
    } else {
        return 'Computer';
    }
}

function checkWins() {
    let playerWins = winners.filter((item) => item == "Player").length;
    let computerWins = winners.filter((item) => item == "Computer").length;
    return Math.max(playerWins, computerWins)
}

function logWins() {
    let playerWins = winners.filter((item) => item == "Player").length;
    let computerWins = winners.filter((item) => item == "Computer").length;
    let ties = winners.filter((item) => item == "Tie").length;
}

game();
// For now, remove the logic that plays exactly five rounds.

// Create three buttons, one for each selection. 
// Add an event listener to the buttons that call your playRound function 
// with the correct playerSelection every time a button is clicked. 
// (you can keep the console.logs for this step)

// Add a div for displaying results and change all of your console.logs into DOM methods.

// Display the running score, and announce a winner of the game once one player reaches 5 points.