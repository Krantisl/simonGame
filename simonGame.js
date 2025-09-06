

let gameSq=[];
let userSq=[];
let started=false;
let level=0;
let h2=document.querySelector("h2");
let btnArr=["pink","orange","green","blue"];
let body=document.querySelector("body");
//start and level up
document.addEventListener("keydown",function(){
    if(started!=true){
    console.log("game started");
    started=true;
    }
    levelUp();
});

//flash btn
function flashbtn(btn){
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove("gameflash");
    },250);
};

function flashuser(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
};

function checkBtn(idx){
    if(gameSq[idx]==userSq[idx]){
        if(gameSq.length==userSq.length){
            setTimeout(levelUp(),1000);
        }
        console.log("same value");
    }
    else{
        h2.innerHTML=`Game over <b>your score was ${level} <b> <br>enter any key for restart`;
        body.classList.add("bodyFlash");
        setTimeout(() => {
           body.classList.remove("bodyFlash");
        }, 400);
        resetOriginal();
    }
};

//level up and selct random btn for flash and change H2
function levelUp(){
    userSq=[];
    level++;
    h2.innerText=`Level  ${level}`;
    let ranIdx=Math.floor(Math.random()*4);
    let ranColor=btnArr[ranIdx];
    gameSq.push(ranColor);
    console.log(gameSq);
    let ranbtn=document.querySelector(`.${ranColor}`);
    flashbtn(ranbtn);
}

function btnPress(){
    let btn=this;
    flashuser(btn);
    let btnColor=btn.getAttribute("id");
    userSq.push(btnColor);
    checkBtn(userSq.length-1);
}
let allBtns=document.querySelectorAll(".btn");

for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}



function resetOriginal(){
    gameSq=[];
    userSq=[];
    level=0;
    started=false;
}
