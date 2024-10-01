let boxes=document.querySelectorAll(".box");
let msg= document.querySelector("#msg");
let msg_container= document.querySelector(".msg-container");
let resetBtn=document.querySelector("#reset-btn");
let newgame=document.querySelector("#new-game");

const W_pattern=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
let c=0;
let turn0=true;
boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        c++;
        
        if(turn0){
            box.innerText="O";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkWinner();
        if(c==9){
            draw();
        }
    })
});
const draw=()=>{
    msg.innerText=`This match is a draw!.Click reset.`
    msg_container.classList.remove('hide');
}
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableBoxes=()=>{
    turn0=true;
    for(let box of boxes){
        box.innerText="";
        box.disabled=false;
        msg_container.classList.add("hide");
    }
}

const showWinner=(winner)=>{
    msg.innerText=`Congratulations ${winner} ! You won the game.`
    msg_container.classList.remove('hide');
}

const checkWinner=()=>{
for(let pattern of W_pattern){
    let val1=boxes[pattern[0]].innerText;
    let val2=boxes[pattern[1]].innerText;
    let val3=boxes[pattern[2]].innerText;
    if(val1!="" && val2!="" && val3!=""){
        if(val1 === val2 && val2 === val3){

            showWinner(val1==="O"?"PLAYER1":"PLAYER2");
            disableBoxes();
        }

    }
}
}
resetBtn.addEventListener('click',enableBoxes);
newgame.addEventListener('click',enableBoxes);

