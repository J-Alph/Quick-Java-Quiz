var startBtn = document.querySelector("#start-btn");




console.log("hey its working")

var answers = ["variable", "seven", "object", "boolean", "function", "expression"]
var timer = 60;
var wins = 0;
var losses =0;
var highScore = 0;


console.log (answers[2])




// need to start at the beginning, set score to O, set time to 60

function init (){
    setScore();
    setTimer();

}

function getScore (){
   localStorage.getItem("score");
    
}

function setSccore (){
    localStorage.setItem("score");
    if(highScore === 0){
        return
    }else  {
        highScore = 0;
    } 


}


function timeTimer (){
    

}
// or run boolean statemnet for else statement

function gameOver (){

}

// target.listner for choices in text area


function quizStart (){
    timeTimer()

}


startBtn.addEventListener("click", quizStart)

 init();   
