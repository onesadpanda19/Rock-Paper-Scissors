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
first to 5 wins
*/
let playerScore = 0
let computerScore = 0
let buttons = document.querySelectorAll(".btn");
let roundResult;
/* let roundResult update player or computer score*/

// Global Scope
buttons.forEach((button) => {
    // Outer scope
    button.addEventListener("click", () => {
        if (playerScore == 5 || computerScore == 5) {
            return
        }
        // Inner scope
        // Get a player choice
        let player = (button.id) // Rock, paper, scissors

        // Get a computer choice
        let computer = getComputerChoice()
        
        //Play a round
        roundResult = playRound(computer, player)
        if (roundResult === "Player Wins!") {playerScore ++}
        if (roundResult === "Computer Wins!") {computerScore ++}
        console.log (playerScore)
        console.log (computerScore)
        const player1 = document.querySelector(".player")
        player1.textContent = `Player Score: ${playerScore}`
        const computer1 = document.querySelector(".computer")
        computer1.textContent = `Computer Score: ${computerScore}`
        // Select parent element
        const roundResultContainer =document.querySelector(".empty")

        // Create a new child element
        const roundResultElement = document.createElement('div')
        const roundResultElement2 = document.createElement('div')
        const roundResultElement3 = document.createElement("div")
        const resetButton = document.createElement("button")
        // Fill the child element with stuffz
        roundResultElement.textContent = `${roundResult}`
        resetButton.textContent = "Play Again?"
        // Append child element to parent
        roundResultContainer.appendChild(roundResultElement);

        setTimeout(() => {
            roundResultContainer.removeChild(roundResultElement)
        }, 1000)
        if (playerScore === 5) {
            roundResultElement2.textContent = "You Won!"
            roundResultContainer.appendChild(roundResultElement2)
            roundResultContainer.appendChild(resetButton)
             
            
        }
        if (computerScore === 5) {
            roundResultElement3.textContent = "Computer Won!"
            roundResultContainer.appendChild(roundResultElement3)
            roundResultContainer.appendChild(resetButton)
            
        }
        resetButton.addEventListener("click", () => {
            computerScore = 0
            playerScore = 0
            roundResultContainer.replaceChildren();
            player1.textContent = "Player Score: 0"
            computer1.textContent = 'Computer Score: 0' 
        })
    })
});


/*read once someone reaches 5 and end the game


/**
 * getComputerChoice is a function that randomly selects either ROCK, PAPER, or SCISSORS
 * 
 * @returns {String} returns the string ROCK, PAPER, or SCISSORS
 */
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
