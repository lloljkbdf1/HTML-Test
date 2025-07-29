const Boxa=document.getElementById("Box")
const Score=document.getElementById("Score")
var Check=0
currentscore=parseInt(document.cookie)
if (isNaN(document.cookie)||isNaN(currentscore)){
    var newscore=0
    document.cookie=newscore
    currentscore=newscore
    console.log(newscore)
}
Score.textContent=currentscore
function ChangeText(event){
    if (isNaN(document.cookie)||isNaN(currentscore)){
    var newscore=0
    document.cookie=newscore
    currentscore=newscore
    console.log(newscore)
}
if (Check==0){
    currentscore=currentscore+1;
    document.cookie=currentscore
    Check=1
    console.log(currentscore)
    event.target.style.backgroundColor="red"
    event.target.style.color="darkred"
    event.target.textContent="Cool!"
    Score.textContent=currentscore
    setTimeout(() => {
    event.target.style.backgroundColor="blue"
    event.target.style.color="darkblue"
    event.target.textContent="Click Me!"
    Check=0
    }, 1000)
}
}
Boxa.addEventListener("pointerdown",ChangeText)