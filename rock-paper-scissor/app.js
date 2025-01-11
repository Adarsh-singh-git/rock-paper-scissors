let getComputerChoice = function () {
    let randomNumbers = Math.floor(Math.random() * 3);
    if (randomNumbers === 0) {
        return "rock"
    } else if (randomNumbers === 1) {
        return "paper"
    } else {
        return "scissors"
    }
}

let getHumanChoice = function () {
    let userInput = prompt("Enter the choice('Rock' , 'Paper' , 'Scissors')").toLowerCase()
    if (userInput === "rock") {
        return userInput
    } else if (userInput === "paper") {
        return userInput
    } else {
        return userInput
    }

}

let computerScore = 0;
let humanScore = 0;


let playRound = function (humanChoice, computerChoice) {
    console.log(`humanChoose : ${humanChoice}`)
    console.log(`computerChoose : ${computerChoice}`)

    if (humanChoice === computerChoice) {
        console.log("It\'s a tie !!")
    } else if ((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")) {
        console.log(`Human Wins ${humanChoice} beats ${computerChoice}`)
        humanScore++
    } else {
        console.log(`Computer Wins ${computerChoice} beats ${humanChoice}`)
        computerScore++
    }

    console.log(`Score => HumanScore : ${humanScore} , ComputerScore : ${computerScore}`)
}




let playGame = function () {
    for (let i = 1; i <= 5; i++) {
        playRound(getHumanChoice(), getComputerChoice())
    }
   if (humanScore > computerScore) {
    console.log("Human Wins!!")
   }else if(computerScore > humanScore){
    console.log("Computer Wins !!")
   }else{
    console.log("It\'s a tie!!")
   }

}

playGame()









