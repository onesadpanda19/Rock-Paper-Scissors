/* player wil choose between rock, paper, or scissors.
then the computer will make a choice,
then the result will be displayed on who won or if a tie occurred.
loop to five rounds*/
// game
/*if playerSelection = ComputerSelection
then tie
if computerSelection is rock and playerSelection is paper,
if computerSelection is paper and playerSelection is scissors, 
if computerSelection is Scissors and playerSelection is rock, 
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
    if (
        (selectionTwo === "ROCK") && (selection === "SCISSORS") ||
        (selectionTwo === "PAPER") && (selection === "ROCK") ||
        (selectionTwo === "SCISSORS") && (selection === "PAPER")
    ){return "Player Wins!"}
    
    if (
        (selectionTwo === "ROCK") && (selection === "PAPER") ||
        (selectionTwo === "PAPER") && (selection === "SCISSORS") ||
        (selectionTwo === "SCISSORS") && (selection === "ROCK")
    ){return "Computer Wins!"}4

    if (
        selection === selectionTwo
    ) {return "Its A Tie!"}
}
console.log(playRound())
/* game function will start both the player and the computer at 0. then add a
point to whoever wins the round. then after five rounds declare a winner!*/

let playerScore = 0
let ComputerScore = 0
for (var i=0; i < 6; i++) {
    console.log(playRound())
    console.log(playerScore, ComputerScore)
}