function randomNumber() {
   return Math.floor(Math.random() * 3) + 1;
}



function userInput() {
    var x = prompt("Rock, paper, or scissors?");
    return x.toLowerCase();
}
   

/*let result;*/
let playerSelection = userInput();
let computerSelection = randomNumber();
var computerScore = 0;
var userScore = 0;
function playRound(playerSelection, computerSelection) {
    userInput();
    randomNumber();
if (playerSelection === "rock" && computerSelection == 2) {
     alert("Computer chooses paper. You lose."); 
     (++computerScore);
     alert(`computer score is ${computerScore}`);   
} else if (playerSelection === "paper" && computerSelection == 3) {
     alert("Computer chooses scissors. You lose.");
     (++computerScore);
     alert(`computer score is ${computerScore}`);
} else if (playerSelection === "scissors" && computerSelection == 1) {
    alert("Computer chooses rock. You lose.");
    (++computerScore);
    alert(`computer score is ${computerScore}`);
} else if (playerSelection === "rock" && computerSelection == 1) {
    alert("Computer chooses rock as well. Tie!")
} else if (playerSelection === "paper" && computerSelection == 2) {
    alert("Computer chooses paper as well. Tie!")
} else if (playerSelection === "scissors" && computerSelection == 3) {
    alert("Computer chooses scissors as well. Tie!")
} else if (playerSelection === "rock" && computerSelection == 3) {
    alert("Computer chooses scissors. You win!");
    (++userScore);
    alert(`your score is ${userScore}`);
} else if (playerSelection === "paper" && computerSelection == 1) {
    alert("Computer chooses rock. You win!");
    (++userScore);
    alert(`your score is ${userScore}`);
} else if (playerSelection === "scissors" && computerSelection == 2) {
    alert("Computer chooses paper. You win!");
    (++userScore);
    alert(`your score is ${userScore}`);
}

return;
}

function game() {
    for (let round = 0; round < 5; round++) {
        (playRound(playerSelection, computerSelection));   
    }
    if (round = 4 && userScore > computerScore) {
        alert("You've won best of 5!")
    } else (round = 4 && computerScore > userScore) 
        alert("Computer wins best of 5!")
}
/*console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection))*/
console.log(game());
/*switch (message, computer) {
    case (message === "rock" && computer === 2):
        alert("Computer chooses paper. You lose.");
        break;
    case (message === "paper" && computer === 3):
        alert("Computer chooses scissors. You lose.");
        break;
    case (message === "scissors" && computer === 1):
        alert("Computer chooses rock. You lose.")
        break;
    default:
        alert("Default case");
        break;
}*/



/* function playRound(playerSelection, computerSelection) {
 1 = "rock"
 2 = "paper"
 3 = "scissors"

 switch tie:

 switch (word) {
    case "rock" : 1;
    break;
    case "paper" : 2;
    break;
    case "scissors" : 3;
    break;
   }
   return;


}
*/
/*const computerSelection = getComputerChoice();*/
