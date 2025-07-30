const Rock=document.getElementById("Rock");
const Paper=document.getElementById("Paper");
const Scissors=document.getElementById("Scissors");
var computertext=document.getElementById("Computertext");
var text=document.getElementById("Textforgame");
function Random(max){
    return Math.floor(Math.random() * max);
}
function Rockthing(){
    if (Random(3)==0){
        console.log("Tie!")
        text.textContent="Tie!"
        text.style.color="orange"
        computertext.textContent="Rock"
    }
    if (Random(3)==1){
        console.log("You lose!")
        text.textContent="You lose!"
        text.style.color="red"
        computertext.textContent="Paper"
    }
     if (Random(3)==2){
        console.log("You win!")
        text.textContent="You win!"
        text.style.color="green"
        computertext.textContent="Scissors"
    }
}
Rock.addEventListener("pointerdown",Rockthing)
function Paperthing(){
    if (Random(3)==0){
        console.log("You win!")
        text.textContent="You win!"
        text.style.color="green"
        computertext.textContent="Rock"
    }
    if (Random(3)==1){
         console.log("Tie!")
        text.textContent="Tie!"
        text.style.color="orange"
        computertext.textContent="Paper"
    }
     if (Random(3)==2){
        console.log("You lose!")
        text.textContent="You lose!"
        text.style.color="red"
        computertext.textContent="Scissors"
    }
}
Paper.addEventListener("pointerdown",Paperthing)
function Scissorsthing(){
    if (Random(3)==0){
        console.log("You lose!")
        text.textContent="You lose!"
        text.style.color="red"
        computertext.textContent="Rock"
    }
    if (Random(3)==1){
        console.log("You win!")
        text.textContent="You win!"
        text.style.color="green"
        computertext.textContent="Paper"
    }
     if (Random(3)==2){
        console.log("Tie!")
        text.textContent="Tie!"
        text.style.color="orange"
        computertext.textContent="Scissors"
    }
}
Scissors.addEventListener("pointerdown",Scissorsthing)