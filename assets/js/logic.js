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
        theChoices.appendChild(btn)
    }

    // Will need event listeners to make sure answer that is clicked is correct - needs to run inside the function as code is printed by for loop?

    document.getElementById("answer1").addEventListener("click", function () {
        checkAnswer(questionIndex, choices[0]);
    });
    document.getElementById("answer2").addEventListener("click", function () {
        checkAnswer(questionIndex, choices[1]);
    });
    document.getElementById("answer3").addEventListener("click", function () {
        checkAnswer(questionIndex, choices[2]);
    });

}

// function to check answer - add the Question and choice arguments to use in the function
function answerCheck(theQuestion, choice) {
    // check answer and print result
    if (choice === quizQuestions[theQuestion].answer) {
        feedbackSection.innerHTML = "That is correct!";
    } else {
        feedbackSection.innerHTML = "I'm afraid that is incorrect";
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



