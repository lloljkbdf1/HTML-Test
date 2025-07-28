const Boxa=document.getElementById("Box")
const Score=document.getElementById("Score")
var currentscore=parseInt(document.cookie)
if (isNaN(document.cookie)||isNaN(currentscore)){
    var newscore=0
    document.cookie=newscore
    currentscore=newscore
    console.log(newscore)
}
Score.textContent=currentscore
w=window.innerWidth
console.log(w)
function ChangeText(event){
    if (isNaN(document.cookie)||isNaN(currentscore)){
    var newscore=0
    document.cookie=newscore
    currentscore=newscore
    console.log(newscore)
}
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