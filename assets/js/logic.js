// Place where score will be displayed
var finalScore = document.querySelector("#final-score");
var startBtn = document.querySelector("#start");
var startScreen = document.querySelector("#start-screen");
var questionSection = document.querySelector(".hide");
var feedbackSection = document.querySelector("#feedback");
var questionTitle = document.querySelector("#question-title");
var theChoices = document.querySelector("#choices");

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
    // print the question to the h2 html tag
    questionTitle.innerHTML = quizQuestions[theQuestion].question;
    var choices = quizQuestions[theQuestion].choices;
    var answer = quizQuestions[theQuestion].answer;

    for (i = 0; i < choices.length; i++) {
        var choice = choices[i];
        // create and append the choices as buttons to the HTML
        var btn = document.createElement("button");
        btn.textContent = choice;
        //add a class to generated buttons 
        btn.classList.add("answer-button");
        theChoices.appendChild(btn);
    }

    // Add event listeners to the generated buttons
    var buttonAnswers = document.querySelectorAll("button.answer-button");

    for (var i = 0; i < buttonAnswers.length; i++) {
        buttonAnswers[i].addEventListener("click", function() {
            //checks the answer printed in the button
            answerCheck(theQuestion, this.innerHTML);
            // go to next question
        });
    }

}

// function to check answer - add the Question and choice arguments to use in the function
function answerCheck(theQuestion, choice) {
    // check answer and print result
    if (choice === quizQuestions[theQuestion].correct) {
        // feedbackSection.innerHTML = "That is correct!";
        alert("Correct!");
    } else {
        // feedbackSection.innerHTML = "I'm afraid that is incorrect";
        alert("Wrong!");
    }
}

//function to run next question in array




// create an event listener for the button to start the game
startBtn.addEventListener("click", function (event) {
    event.preventDefault();

    // remove the starter text and remove hide class from question section
    startScreen.style.display = "none";
    questionSection.classList.remove("hide");

    startGame();


});



