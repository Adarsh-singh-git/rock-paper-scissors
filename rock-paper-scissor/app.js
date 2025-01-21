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


    if (humanScore === 5) {
        console.log("hurray !! humans wins")
        return;
    } else if (computerScore === 5) {
        console.log(` hurray !! computer Wins`)
        return;
    } else if (humanScore > 5 || computerScore > 5) {
        console.log(humanScore > 5 ? "humanWins!!" : "computerWins!!")
    }
    return;
}




const buttons = document.querySelectorAll(".choiceButton")
buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        if (humanScore >= 5 || computerScore >= 5) {
            event.preventDefault();
            button.disabled = true
        } else {
            const userInput = event.target.getAttribute("data-choice")
            playRound(userInput, getComputerChoice())
        }
    })

});


const container = document.querySelector('body')
const content = document.createElement('div')
content.classList.add('content')
content.textContent = "Results :"
container.appendChild(content)


console.log = function (message) {
    const para = document.createElement('p');
    para.textContent = `${message}`;
    document.body.appendChild(para)
}











