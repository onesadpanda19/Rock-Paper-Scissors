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
function getPlayerChoice(){
    let answer = (prompt("Please choose Rock, Paper, or Scissors!"))
    let selectionTwo = answer.toUpperCase()
  
    return selectionTwo
   
} 

function getComputerChoice(){
 let result = Math.floor(Math.random()*3+1)
 if (result === 1) {return "ROCK"}
 if (result === 2) {return "PAPER"} 
 if (result === 3) {return "SCISSORS"}
}

function playRound(selection, selectionTwo) {
    if (
        (selectionTwo === "ROCK") && (selection === "SCISSORS") ||
        (selectionTwo === "PAPER") && (selection === "ROCK") ||
        (selectionTwo === "SCISSORS") && (selection === "PAPER")
    ){return "Player Wins!"}
    
    if (
        (selectionTwo === "ROCK") && (selection === "PAPER") ||
        (selectionTwo === "PAPER") && (selection === "SCISSORS") ||
        (selectionTwo === "SCISSORS") && (selection === "ROCK")
    ){return "Computer Wins!"}

    if (
        selection === selectionTwo
    ) {return "Its A Tie!"}

    else {return "Not a Valid Selection"}
}
/* game function will start both the player and the computer at 0. then add a
point to whoever wins the round. then after five rounds declare a winner!*/

/**
 * Function to run a game of rock paper scissors
 * @return {string} win, lose, or tie
 */
let playerScore = 0
let computerScore = 0
function game() {
    // Create variables to keep track of player score and computer score
   
    // Loop 5 times
    for (var i=0; i < 5; i++) {
       let player = getPlayerChoice()
       let computer = getComputerChoice()
       let result = playRound(player, computer)
       if (result === "Player Wins!") {
        playerScore++
       }
       if (result === "Computer Wins!") {
        computerScore++
       }
       console.log(result)
       console.log(playerScore, computerScore)
    }
    // Compare player score to computer score, decide a winner
    if (computerScore > playerScore) {
        return "Computer Wins!"
    }
    if (playerScore > computerScore) {
        return "Player Wins!"
    }
    if (playerScore === computerScore) {
        return "Its a Tie"
    }
    // Return the result of the game
}
const gameResult = game()
console.log(gameResult)
