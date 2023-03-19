var startBtn = document.body.querySelector("#start-btn");
var timeSpan = document.querySelector("#zerotime");
var circlegrab = document.querySelector("#circle")

var quest1 = document.querySelector("#question1");
var quest2 = document.querySelector("#question2");
var quest3 = document.querySelector("#question3");
var quest4 = document.querySelector("#question4");
var quest5 = document.querySelector("#question5");



var botSpan = document.querySelector("#botbot");

var answers = ["variable", "seven", "object", "boolean", "function", "expression"]
var quizTime = 0;
var wins = 0;
var losses = 0;
var highScore = 0;









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

function init(){
    quest1.style.visibility="hidden";
    quest2.style.visibility="hidden";
    quest3.style.visibility="hidden";
    quest4.style.visibility="hidden";
    quest5.style.visibility="hidden";
}


function quizStart() {
    
    startBtn.disabled = true;
 
    startTimer();
    console.log(quizTime) 

    quest1.style.visibility="visible";
    quest2.style.visibility="hidden";
    quest3.style.visibility="hidden";
    quest4.style.visibility="hidden";
    quest5.style.visibility="hidden";
}

function hideandseek(){
// init();
    document.getElementById("question1").style.display= "hidden"; 
    quest2.style.visibility="visbile"; 
    quest3.style.visibility="visbile";
    document.getElementById("question3").style.display= "hidden";
    document.getElementById("question3").style.display= "hidden";
    quizTime=quizTime-10

}


startBtn.addEventListener("click", quizStart)

botSpan.addEventListener("click",  hideandseek)


console.log(quizTime)


init();
stop