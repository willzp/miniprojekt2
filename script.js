const computerChoiceDisplay = document.getElementById('computerChoice');
const userChoiceDisplay = document.getElementById('userChoice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
const userScoreDisplay = document.getElementById('userScore');
const computerScoreDisplay = document.getElementById('computerScore');
let username;
let userChoice;
let computerChoice;
let userScore = 0;
let computerScore = 0;
let result;


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  if(e.target.id === 'start'){
    username = document.getElementById('username').value;
    return;
  }
  
  if(resultDisplay.innerHTML != ''){
    resetGame();
} 
  userChoice = e.target.id;
  userChoiceDisplay.innerHTML = userChoice;
  generateComputerChoice();
  getResult();
}))

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1 
  
  if (randomNumber === 1) {
    computerChoice = 'rock';
  }
  if (randomNumber === 2) {
    computerChoice = 'scissors';
  }
  if (randomNumber === 3) {
    computerChoice = 'paper';
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === 'rock' && userChoice === "paper") {
      userScore++;
  }
  if (computerChoice === 'rock' && userChoice === "scissors") {
      computerScore++;
  }
  if (computerChoice === 'paper' && userChoice === "scissors") {
      userScore++;
  }
  if (computerChoice === 'paper' && userChoice === "rock") {
      computerScore++;
  }
  if (computerChoice === 'scissors' && userChoice === "rock") {
      userScore++;
  }
  if (computerChoice === 'scissors' && userChoice === "paper") {
      computerScore++;
  }

  userScoreDisplay.innerHTML = userScore;
  computerScoreDisplay.innerHTML = computerScore;
  checkIfGameIsOver();
}

function checkIfGameIsOver(){
    if(userScore === 3){
        resultDisplay.innerHTML = 'You won' + ' ' + username + "!";
    }
    else if(computerScore === 3){
        resultDisplay.innerHTML = 'You lost' + ' ' + username;
    }
}

function resetGame(){
    userScore = 0;
    computerScore = 0;
    userScoreDisplay.innerHTML = userScore;
    computerScoreDisplay.innerHTML = computerScore;
    resultDisplay.innerHTML = '';
}