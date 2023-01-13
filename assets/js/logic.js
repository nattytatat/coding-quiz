// Place where score will be displayed
var finalScore = document.querySelector("#final-score");
var startBtn = document.querySelector("#start");
var startScreen = document.querySelector("#start-screen");
var questionSection = document.querySelector(".hide");
var questionTitle = document.querySelector("#question-title");
var theChoices = document.querySelector("#choices")

var timeLeft = 60;
var finalScore = 0;
var currentQuestion = 0;

// start the game
function startGame() {

    // add timer

    //Display the first question when starting game, calling the function below to run through the question array
    var theQuestion = 0;
    displayQuestion(theQuestion);
}

// to display each question in the array using for loop
function displayQuestion(theQuestion) {
    questionTitle.innerHTML = quizQuestions[theQuestion].question;
}


// create an event listener for the button to start the game
startBtn.addEventListener("click", function(event) {
    event.preventDefault();
    
    // remove the starter text and remove hide class from question section
    startScreen.style.display = "none";    
    questionSection.classList.remove("hide");

    startGame();
    

});



