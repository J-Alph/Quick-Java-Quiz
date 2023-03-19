var startBtn = document.body.querySelector("#start-btn");
var timeSpan = document.body.querySelector("#zerotime");

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

function setTimer() {
    quizTime = 60;
}

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

    var mytimer = setInterval(function () {
        if (quizTime <= 0) {
            clearInterval(mytimer)
            return;
        };
        quizTime--;
        console.log(quizTime);

        timeSpan.textContent =quizTime;
    }, 1000)
   

}
// or run boolean statemnet for else statement

function gameOver() {

}

// target.listner for choices in text area


function quizStart() {
    quizTime = 60;
    startBtn.disabled = true;
    startTimer()
    console.log(quizTime) 
}


startBtn.addEventListener("click", quizStart)

console.log(quizTime)

//  init();   
