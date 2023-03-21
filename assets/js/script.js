var startBtn = document.body.querySelector("#start-btn");
var timeSpan = document.querySelector("#zerotime");

var areadisplay = document.querySelector("#questionarea")
var botSpan = document.querySelector("#botbot");

var questionsArray = ["What is JavaScript?", "List one of key Features of Javascript from the options?", "What are the looping structures in Javascript?", "Is Javascript case-sensitive?"]
var quizTime = 0;
var highScore = 0;

var testquestion = [];


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
    if(quizTime ===0)
        window.alert("Test Over")
}

// target.listner for choices in text area



function quizStart() {
    
    startBtn.disabled = true;
    
    startTimer();

    for(var index = 0; index < questionsArray.length; index++);

    var random = Math.floor(Math.random()* questionsArray.length);
    var randomarray = questionsArray[random]

    testquestion.push(randomarray);

    areadisplay.textContent =randomarray

    console.log(randomarray)
    
    console.log("testing")

    if(quizTime ===0)
    window.alert("Test Over")
}



startBtn.addEventListener("click", quizStart)


