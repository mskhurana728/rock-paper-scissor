//Algorithm   
// We have to make a function which randomly gives values in the form of rock, paper and scissor
// We have to make  a function named as computerPlay
//no arguments or parameters
//we will make a condition here using if and we will use math. random to make a random number between 1 to 3 if the 
//random number is 1 we will return rock if it is 2 we will return Paper and if it is 3 we will return Scissor i think it will work








const container = document.querySelector(".container");
const result = document.createElement("p");
result.classList.add("result");
let playerWins = 0;
let computerWins = 0;



function computerPlay() {
    let result;  //this variable will store the result value 
    let randomNo = (Math.floor(Math.random() * 3) + 1); // This will create a random number between 1 to 3including 1 and 3
    // console.log(randomNo); //checking if it is working correctly
    // console.log(typeof (randomNo)); //checking the type of random no
    if (randomNo === 1) {   //setting the conditions for results.
        result = "Rock";
        // console.log(result);
        return result;
    } else if (randomNo === 2) {
        result = "Paper";
        // console.log(result);
        return result;
    } else {
        result = "Scissor";
        // console.log(result);
        return result;
    }
}
// computerPlay(); // running to check if it works correctly


//Next Function
//Have to create a function named playRound which 
//will take two parameters playerSelection and computerSelection
//We have to return a string which will say that you loose or win using
//this syntax "You Lose! Paper beats Rock" and also we have to make our parameters case insensitive

//Algorithm
//Firstly we will declare the function with two parameters
//We will convert the string parameters to uppercase so that we can use it of equality in connditional statements
//if the playerSelection will be rock  and computer choice is scissor than the player wins like this we will make other cases
//we will use if statement to return the right result

function playRound(playerSelection, computerSelection) {

    let winner;
    let playerChoice = playerSelection.toUpperCase(); //converting the string to uppercase to make it case insensitive
    let computerChoice = computerSelection.toUpperCase();
    // console.log(playerChoice, computerChoice)
    if (playerChoice === "ROCK" && computerChoice === "SCISSOR") {
        container.textContent = "You Win! Rock beats Scissor";
        winner = "PLAYER";
        return winner;


    } else if (playerChoice === "SCISSOR" && computerChoice === "PAPER") {
        container.textContent = "You Win! Scissor beats Paper";
        winner = "PLAYER";
        return winner;

    } else if (playerChoice === "PAPER" && computerChoice === "ROCK") {
        container.textContent = "You Win! Paper beats Rock";
        winner = "PLAYER";
        return winner;

    } else if (playerChoice === "ROCK" && computerChoice === "PAPER") {
        container.textContent = "You Loose! Paper beats Scissor";
        winner = "COMPUTER";
        return winner;

    } else if (playerChoice === "SCISSOR" && computerChoice === "ROCK") {
        container.textContent = "You Loose! Rock beats Scissor";
        winner = "COMPUTER";
        return winner;

    } else if (playerChoice === "PAPER" && computerChoice === "SCISSOR") {
        container.textContent = "You Loose! Scissor beats Paper";
        winner = "COMPUTER";
        return winner;
    } else {                                                              //its for when both the player choice and computer choice is same
        container.textContent = "Its a tie! Play Again!";
        winner = "TIE";
        return winner;

    }

}


// We have to  write a function called game()
//this function will call playRound function 5 times
//now we need to keep track of winner and looser to show the result after 5 rounds

//Algorithm
//we will declare a function named as game() with no parameters
//we will change playRound return value to PLAYER OR COMPUTER which will help us  in keeping track of results at the end
//in the function we will declare two variables equal to 0
//then we will run a for loop  for 5 times by initializing i =5 
//inside the loop we will prompt for user choice and also run computerPlay to get computer choice
//inside the for loop there will be playRound which will return the winner
//then inside the loop we will set an if condition which will decide who wins and then it will  increase on of the variable we declared
//and after 5 runs whichever variable will be greater  will decide who wins

// 

// game();

//EVENT LISTENERS FOR BUTTONS

//We have to make  an event listener which will call playRound function and also provide the player selection

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {


    button.addEventListener("click", (e) => {

        playerSelection = button.value;
        game(playerSelection);


    })

})


// we want a function which 

function game(playerSelection) {



    let perGameWinner;
    console.log(playerSelection);
    computerSelection = computerPlay();
    perGameWinner = playRound(playerSelection, computerSelection);
    if (perGameWinner === "PLAYER") {
        playerWins++;
    } else if (perGameWinner === "COMPUTER") {
        computerWins++;
    }
    result.textContent = `Player: ${playerWins} Computer:${computerWins}`;
    container.appendChild(result);

    if (playerWins == 5) {
        if (playerWins > computerWins) {
            result.textContent = "Congrats You Win";

            playerWins = 0;
            computerWins = 0;


        } else if (computerWins > playerWins) {
            result.textContent = "You Loose!!";
            playerWins = 0;
            computerWins = 0;
        } else {
            result.textContent = "It's a Tie";
            playerWins = 0;
            computerWins = 0;
        }

    }
}
