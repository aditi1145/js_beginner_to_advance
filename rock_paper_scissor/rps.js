
let compChoice="";
const choices = document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let playerScore=document.querySelector("#player-score");
let compScore=document.querySelector("#comp-score");

let userScores=0;
let compScores=0;

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        msg.innerText=`You Win! Your ${userChoice} beats computer's ${compChoice}`;
        msg.style.backgroundColor="green";
        userScores+=1;
        playerScore.innerText=`${userScores}`;
    }
    else{
        msg.innerText=`You lost! Computer's ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";

        compScores+=1;
        compScore.innerText=`${compScores}`;

    }

}

const drawGame=()=>{
    msg.innerText="This match was a draw! Play Again!";
    msg.style.backgroundColor="blue";

};

const genCompChoice=()=>{
    let options=["rock","paper","scissors"];
    let i=Math.floor(Math.random()*3);
    return options[i];
};

const playgame=(userChoice)=>{
    const compChoice=genCompChoice();

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper"? false:true;
        }
        else if(userChoice === "scissors"){
            userWin = compChoice === "paper"? true:false;
        }
        else
            userWin = compChoice === "scissors"? false:true;
    showWinner(userWin,userChoice,compChoice);

    }

    };

choices.forEach((choice)=>{
    console.log(choices);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        console.log(userChoice);
        playgame(userChoice);

    })
});

