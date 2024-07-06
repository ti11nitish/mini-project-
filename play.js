let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score")

const genCompChoice = () => {
   const options = ["rock" , "paper" , "scissor"];
   const randIdx = Math.floor(Math.random() * 3);
   return options[randIdx];

};

const drawGame = () => {
    msg.innerText = "GAME DRAW . Play Again!";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin , userChoice , compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `YOU WIN ! YOUR ${userChoice} BEATS ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `YOU LOST.. ${compChoice} BEATS YOUR ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
   console.log("user choice =" , userChoice);
   //Generate computer choice
   const compChoice = genCompChoice();
   console.log("computer choice =" , compChoice);

  if(userChoice === compChoice){
    drawGame();
  }else {
    let userWin = true ;
    if(userChoice === "rock"){
        // paper or scissors
        userWin = compChoice === "paper" ? false : true;
       
    }else if(userChoice === "paper"){
        userWin = compChoice === "scissors" ? false : true;
    }else {
          // rock or paper
        userWin = compChoice === "rock" ? false : true ;

    }
    showWinner(userWin , userChoice , compChoice);
  }
};

choices.forEach((choice) => {
    choice.addEventListener("click" , () =>{
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    });
}); 

