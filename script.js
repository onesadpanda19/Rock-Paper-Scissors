/* player wil choose between rock, paper, or scissors.
then the computer will make a choice,
then the result will be displayed on who won or if a tie occurred.
loop to five rounds*/
// game
/*if playerSelection = ComputerSelection
then tie
if computerslection is rock and playeselection paper,
if computerselction is paper and playerselection is scissors, 
if computerselction is Scissors and playerselection is rock, 
Player Wins
if opposite
Computer wins
loop to 5 games
first to 5 wins wins
*/
let answer = (prompt("Please choose Rock, Paper, or Scissors!"))
function getPlayerChoice(){
    console.log(answer)
    let answerTwo = answer.toUpperCase()
    return answerTwo
    console.log(answerTwo)
}
const selectionTwo = getPlayerChoice()
console.log(selectionTwo)

function getComputerChoice(){
 let result = Math.floor(Math.random()*3+1)
 console.log(result)
 if (result === 1) {return "ROCK"}
 if (result === 2) {return "PAPER"} 
 if (result === 3) {return "SCISSORS"}
}
const selection = getComputerChoice()
console.log(selection)



function playRound(playerSelection, ComputerSelection) {
    
}