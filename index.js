let timer = 60;

let score = 0;
let hitrn = 0;

function increaseScore(){
    score += 10;
    document.querySelector("#score").textContent = score
}
 function getHit(){
     hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitbubble").textContent = hitrn
 }

function makeBubble(){
    let clutter = "";

for(let i = 1 ; i<=147;i++){
    let rn = Math.floor(Math.random()*10);
    clutter  +=  `<div class="bubble">${rn}</div>`    
}

document.querySelector("#pbtm").innerHTML = clutter;
}

function runTime(){
    let timerKey =  setInterval(()=>{
        if(timer >0){

            timer--;
            document.querySelector("#timer").textContent = timer;
        }else{
            clearInterval(timerKey)
        }
     },1000)
}

document.querySelector("#pbtm")
.addEventListener("click",function(dets){
  let clickedNumber = +dets.target.innerText;
  if(clickedNumber == hitrn){
    increaseScore();
    makeBubble();
    getHit()
  }
})
getHit()
runTime();
makeBubble();