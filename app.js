// let gameSeq = [];
// let userSeq = [];

// let btns = ["yellow", "red", "purple", "green"];

// let started = false;
// let level = 0;

// let h2 = document.querySelector("h2");
// h2.style.color = "red";

// document.addEventListener("keypress", function() {
//     if(started == false){
//         started = true;
//         console.log("game hase started");
//     }

//     levelUp();
// });

// function btnFlash(btn) {
//     btn.classList.add('flash');
//     setTimeout(function() {
//         btn.classList.remove('flash');
//     }, 300);
// }

// function levelUp() {
//     userSeq = [];
//     level++;
// h2.innerText = `level ${level}`;

// let ranIdx = Math.floor(Math.random() * 3);
// let randColor = btns[ranIdx];
// let randbtn = document.querySelector(`.${randColor}`);

// gameSeq.push(randColor);
//     btnFlash(randbtn);
//     console.log(gameSeq);
// }


// function checkAns(idx) {
//  if(userSeq[idx] === gameSeq[idx]) {
//     if(userSeq.length == gameSeq.length){
//         setTimeout(levelUp, 1000);
//     }

//  } else {
//     h2.innerHTML = `game Over! your score was <b> ${level} </b>... press any key to start.`;
//     document.querySelector("body").style.backgroundColor = "red";

//     setTimeout(function() {
//         document.querySelector("body").style.backgroundColor = "white";
//     }, 250);
//     reset();
//  }
// }

// function btnPress() {
//     let btn = this;
//     btnFlash(btn);

//     userColor = btn.getAttribute("id");
//     userSeq.push(userColor);

//     checkAns(userSeq.length-1);
// }

// let allBtns = document.querySelectorAll(".btn");
// for(btn of allBtns) {
//     btn.addEventListener("click", btnPress);
// }

// function reset() {
//     started = false;
//     gameSeq = [];
//     userSeq = [];
//     level = 0;
// }


let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;
let body = document.querySelector("body");
let h2 = document.querySelector("h2");
let btns = ["yellow", "red", "purple", "green"];
let highScore = 0;

document.addEventListener("keypress", function() {
    if(started === false){
        started = true;
        console.log("game has started");
        levelUp();
        
    }

});

function levelUp() {
    userSeq = [];
    level++;
h2.innerHTML = `level ${level}`;

let randIdx = Math.floor(Math.random() * 3);
let randColor = btns[randIdx];
let randbtn = document.querySelector(`.${randColor}`);

btnFlash(randbtn);
gameSeq.push(randColor);
}

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 350);
}

function checkAns(idx) {
    if(gameSeq[idx] === userSeq[idx]){
        if(gameSeq.length == userSeq.length){
            setTimeout(levelUp, 1000);
        }
    }else{
        h2.innerHTML = `Game Over Your Score was <b> ${level} </b> </br> press any key to start  </br> your high score is ${highScore}`;
        document.querySelector("body").style.backgroundColor = "red";
        document.querySelector("body").style.boxShadow = "box-shadow: 15px 15px 45px red;";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";

        }, 400); 

        if(level > highScore){
            highScore = level;
        }
        
        gameOver();

    }
}

function btnPress() {
    let btn = this;
    btnFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);


}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener("click", btnPress);
}




function gameOver() {
    console.log("gameover fun triggered");
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
    // h2.append(highScore);
// clearTimeout();
// clearInterval();
// console.log("game is successfully reset");

// document.querySelector("h2").textContent =  `game was reset press any key to start level = ${level}`;
// document.body.style.backgroundColor = "";
}


function rset() {
    console.log("reset fun triggered");
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
clearTimeout();
clearInterval();
console.log("game is successfully reset");

document.querySelector("h2").textContent =  `Game Was Reset Press Any Key To Play again`;
document.body.style.backgroundColor = "";
// h2.append(highScore);
}




    let resetBt = document.querySelector("#resetBtn");
    resetBt.addEventListener("click", rset);


