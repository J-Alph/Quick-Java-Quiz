var startBtn = document.body.querySelector("#start-btn");
var timeSpan = document.querySelector("#zerotime");
var circlegrab = document.querySelector("#circle")

var botSpan = document.querySelector("#botbot");
var hideSpan = document.querySelector("#hidebox");


var answers = ["variable", "seven", "object", "boolean", "function", "expression"]
var quizTime = 0;
var wins = 0;
var losses = 0;
var highScore = 0;



// need to start at the beginning, set score to O, set time to 60

// function init (){
//     setScore();
//     setTimer();

// }



function getScore() {
    var myscore = localStorage.getItem("score");
    if (myscore) {

    }


}

function setSccore() {
    localStorage.setItem("score");
    if (highScore === 0) {
        return
    } else {
        highScore = 0;
    }
}


function startTimer() {     
    quizTime = 60;
   
    var mytimer = setInterval(function () {
        
        if (quizTime <= 0) {
            clearInterval(mytimer)
            return;
        };
        quizTime--;
        console.log(quizTime);

        timeSpan.textContent =quizTime;

        if(quizTime ===0){
                console.log("hey")
                startBtn.disabled =false;
            }

// put a function in this functions that decriments each time of bad answer
        
    }, 1000)
   
   
}
// or run boolean statemnet for else statement

function gameOver() {

}

// target.listner for choices in text area


function quizStart() {
    
    startBtn.disabled = true;
  
    startTimer();
    console.log(quizTime) 
}

function hideandseek(){
    hideSpan.textContent = ("Hello");
    document.getElementById("hidebox").style.display= "none"; 

}


startBtn.addEventListener("click", quizStart)

botSpan.addEventListener("click",  hideandseek)

console.log(quizTime)

//  init();
