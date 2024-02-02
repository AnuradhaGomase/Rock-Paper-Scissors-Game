let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice")
let msg = document.querySelector("#msg");

const genCompChoice = () => {
    let options = ["rock", "paper", "scissors"];
    let rdmIdx = Math.floor(Math.random() * 3);
    return options[rdmIdx];
}

const drawGame = () => {
    msg.innerText = "It's a Draw! Play Again.";
    msg.style.backgroundColor = "#081b31";
}
const clearCompChoice = (cmp) => {
    cmp.classList.remove("computerChoice");
}
const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore += 1;
        document.querySelector("#user-score").innerText = userScore;
        msg.innerText = `You Won! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else {
        compScore += 1;
        document.querySelector("#comp-score").innerText = compScore;
        msg.innerText = `You Lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}
const playGame = (userChoice) => {
    let compChoice = genCompChoice();
    let cmp = document.querySelector(`#${compChoice}`);
    cmp.classList.add("computerChoice");
    
    if(userChoice === compChoice) {
        //Draw Game
        drawGame();
    }else {
        let userWin = true;
        if(userChoice === "rock"){
            //scissors, paper
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            //rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        }else{
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        
        showWinner(userWin, userChoice, compChoice);
    }

    setTimeout(clearCompChoice, 1000, cmp);
    
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})