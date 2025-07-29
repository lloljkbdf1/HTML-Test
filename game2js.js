var circle=document.getElementById("Circle")
var text=document.getElementById("Blahblah")
var timer=document.getElementById("Timer")
var timernum=0
function AddTimer(){
        timernum=timernum+1
        timer.textContent=timernum
    }
id=setInterval(AddTimer,1000)
document.addEventListener("pointermove",function FollowMouse(event){
    function thing(){
    circle.style.top=event.clientY - 50 + "px"
    circle.style.left=event.clientX - 50 + "px"
    }
    setTimeout(thing,500)
    }
)
circle.addEventListener("pointerenter",function idk(event){
    text.textContent="You lose!"
    timernum=0
    timer.textContent=0
    clearTimeout(id)
}
)
circle.addEventListener("pointerout",function what(event){
    id=setInterval(AddTimer,1000)
    text.textContent="Don't touch the red ball"
    }
)


