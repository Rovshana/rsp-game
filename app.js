const computerChoiceDisplay = document.querySelector('#comp-choice');
const userChoiceDisplay = document.querySelector('#user-choice');
const resultDisplay = document.querySelector('#result');

const possibleChoices  = document.querySelectorAll('button');

let userChoice;
let compChoice;


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e)=>{
userChoice = e.target.id
userChoiceDisplay.innerHTML = userChoice;

generateCompChoice();
getResult();
    })
)


function generateCompChoice(){
    const randomNum = Math.floor(Math.random()*possibleChoices.length ) +1;
     if(randomNum === 1){
         compChoice = 'rock';
     } else if(randomNum === 2){
         compChoice = 'paper'
     } else if(randomNum === 3){
         compChoice = 'scissors'
     }

computerChoiceDisplay.innerHTML = compChoice;
}

function getResult(){
    if(compChoice === userChoice){
        resultDisplay.innerHTML = 'it is draw!, try again!';
    }  
    if(compChoice === 'rock' && userChoice === 'paper' ){
        resultDisplay.innerHTML = 'You win !, congrats';
    }  
    if(compChoice === 'paper' && userChoice === 'scissors' ){
        resultDisplay.innerHTML = 'You win!, congrats';
    }   
    if(compChoice === 'scissors' && userChoice === 'rock' ){
        resultDisplay.innerHTML = 'You win!, congrats';
    }   
    if(compChoice === 'scissors' && userChoice === 'paper' ){
        resultDisplay.innerHTML = 'You lost!!';
    }   
    
    if(compChoice === 'rock' && userChoice === 'scissors' ){
        resultDisplay.innerHTML = 'You lost!!';
    }   
    
} 