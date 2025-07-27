const Boxa = document.getElementById("Box")
const Score = document.getElementById("Score")
let currentscore=parseInt(document.cookie)
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
    }, 3000)
}
Boxa.addEventListener("click",ChangeText)