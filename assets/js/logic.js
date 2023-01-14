// Place where score will be displayed
var startBtn = document.querySelector("#start");
var theClock = document.querySelector("#time");
var startScreen = document.querySelector("#start-screen");
var questionSection = document.querySelector(".hide");
var feedbackSection = document.querySelector("#feedback");
var questionTitle = document.querySelector("#question-title");
var theChoices = document.querySelector("#choices");
var endScreen = document.querySelector("#end-screen");
var finalScore = document.querySelector("#final-score");
var submitBtn = document.querySelector("#submit");

var timeLeft = 60;
var currentQuestion = 0;
// by declaring this variable outside the function I can clear the timer when all questions are iterated
var timer;

// start the game
function startGame() {

    timer = setInterval(function(){
        //countdown by one
        timeLeft--;
        theClock.innerHTML = timeLeft;
        //if time remaining is more than 1, show seconds remaining
        if (timeLeft <= 0 ) {
            
            clearInterval(timer);
            endGame();
        }

    }, 1000);

    //Display the first question when starting game, calling the function below to run through the question array
    var theQuestion = 0;
    displayQuestion(theQuestion);
}

// to display each question in the array using for loop
function displayQuestion(theQuestion) {
    // print the question to the h2 html tag
    questionTitle.innerHTML = quizQuestions[theQuestion].question;
    var choices = quizQuestions[theQuestion].choices;
    // var answer = quizQuestions[theQuestion].answer;

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
        buttonAnswers[i].addEventListener("click", function () {
            //checks the answer printed in the button
            answerCheck(theQuestion, this.innerHTML);
            // go to next question - remember to run the argument
            nextQuestion(theQuestion);
        });
    }

}

// function to check answer - add the Question and choice arguments to use in the function
function answerCheck(theQuestion, choice) {
    // check answer and print result
    if (choice === quizQuestions[theQuestion].correct) {
        feedbackSection.classList.remove("hide")
        feedbackSection.innerHTML = "That is correct!";
        // alert("Correct!");
    } else {
        feedbackSection.classList.remove("hide")
        feedbackSection.innerHTML = "I'm afraid that is incorrect";
        timeLeft -= 5;
        // alert("Wrong!");
    }
}

//function to run next question in array - remember to run the argument or will cause error!
function nextQuestion(theQuestion) {
    theQuestion++;
    //clear previous questions
    theChoices.innerHTML = "";
    // loop to check all questions are run and end
    if (theQuestion < quizQuestions.length) {
        displayQuestion(theQuestion);
    } else {
        // alert("end of the game!");
        clearInterval(timer);
        endGame();
    }
}

// when game ends, display score
function endGame() {
    questionSection.classList.add("hide");
    endScreen.classList.remove("hide");
    feedbackSection.classList.add("hide");
    // timeleft is the starting score, this adds the score to the HTML at the end of the game
    finalScore.textContent = timeLeft;
    // update clock when game ends due to questions completing
    theClock.innerHTML = timeLeft;
}


// event listener button that stores scores and goes to the highscores page
submitBtn.addEventListener("click", function (event) {
    // players name from input and return as uppercase
    var playerEntered = document.querySelector("#initials").value;
    var playerName = playerEntered.toUpperCase();

    // check if initials are entered
    if (playerName === "" || playerName.length > 3) {
        alert("Please enter your initials, max of three");
    } else {
        //create object
        var playerData = {
            name: playerName,
            score: timeLeft
        }

        // check other scores in localstorage
        var playerScores = localStorage.getItem("playerScores");
        // if no value, variable is an empty array
        if (playerScores === null) {
            playerScores = [];
            //then we can parse all previous scores
        } else {
            playerScores = JSON.parse(playerScores);
        }

        // push all player scores to the player Data object
        playerScores.push(playerData);
        var latestScore = JSON.stringify(playerScores);
        localStorage.setItem("playerScores", latestScore);

        // go to page that displays score list
        window.location.replace("./HighScores.html");
    }

});

// create an event listener for the button to start the game
startBtn.addEventListener("click", function (event) {
    event.preventDefault();

    // remove the starter text and remove hide class from question section
    startScreen.style.display = "none";
    questionSection.classList.remove("hide");

    startGame();


});



