// Place where score will be displayed
var finalScore = document.querySelector("#final-score");
var startBtn = document.querySelector("#start");
var startScreen = document.querySelector("#start-screen");
var questionSection = document.querySelector(".hide");
var questionTitle = document.querySelector("#question-title");
var theChoices = document.querySelector("#choices")

//time left
var timeLeft = 60;
// keep up to date with the score
var finalScore = 0;
// keep an eye on the current question to ensure starts at the first and the game ends on the last
var currentQuestion = 0;

// run the game
function theGame() {
    console.log("button has been clicked");

    // loop through array questions and choices
    for (i = 0; i < quizQuestions.length; i++) {
        alert(quizQuestions[i].question);
        questionTitle.innerText = quizQuestions[i].question;

    }

    // add timer

    // stop game when questions end
}


// create an event listener for the button to start the game
startBtn.addEventListener("click", function(event) {
    event.preventDefault();
    
    // remove the starter text and remove hide class from question section
    startScreen.style.display = "none";    
    questionSection.classList.remove("hide");

    theGame();
    

});



