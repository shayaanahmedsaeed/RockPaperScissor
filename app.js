let userScore = 0;
let computerScore = 0;

const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");

const drawGame = () => {
    msg.innerText = "Game was Draw!";
    msg.style.color = "#ffffff"
};

const msg = document.querySelector("#msg");

const choices = document.querySelectorAll(".choice");

const genComputerChoice = () => {
    const options = ["stone", "paper", "scissor"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Wins! Your ${userChoice} beats Computer ${compChoice}`;
        msg.style.color = "#7FFF00";
    }
    else{
        computerScore++; 
        computerScorePara.innerText = computerScore;
        msg.innerText = `You Lose! Computer's ${compChoice} beats Your ${userChoice}`;
        msg.style.color = "#FF4500";
    }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
   playGame(userChoice);   
  });
});


const playGame = (userChoice) => {
    //geneate computer choice
    const compChoice = genComputerChoice();

    if(userChoice === compChoice){
       drawGame(); 
       return;
     }
        else{
            let userWin = true;
            
        }
        if(userChoice === "stone"){
            userWin = compChoice === "paper" ? false : true; 
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissor" ? false : true; 
        }else {
           userWin = compChoice === "stone" ?  false : true;
        }
        showWinner(userWin, userChoice, compChoice);
};

