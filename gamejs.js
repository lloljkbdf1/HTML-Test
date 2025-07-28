const Boxa=document.getElementById("Box")
const Score=document.getElementById("Score")
var currentscore=parseInt(document.cookie)
if (currentscore<1){
    var currentscore=0
    document.cookie=currentscore
    console.log(currentscore)
}
Score.textContent=currentscore
w=window.innerWidth
console.log(w)
function ChangeText(event){
    currentscore=currentscore+1;
    document.cookie=currentscore
    console.log(currentscore)
    event.target.style.backgroundColor="red"
    event.target.style.color="darkred"
    event.target.textContent="Cool!"
    Score.textContent=currentscore
    setTimeout(() => {
    event.target.style.backgroundColor="blue"
    event.target.style.color="darkblue"
    event.target.textContent="Click Me!"
    }, 1000)
}
Boxa.addEventListener("click",ChangeText)