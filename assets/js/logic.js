// Place where score will be displayed
var finalScore = document.getElementById("final-score");
var startBtn = document.getElementById("start");
var startScreen = document.getElementById("start-screen");
var questionSection = document.getElementsByClassName("hide");

// keep up to date with the score - may need to start with the total time
var theScore = 0;

// run the game
function theGame() {
    console.log("button has been clicked");
    
    // remove the starter text
    startScreen.style.display = "none";
    // display the questions in a for loop
    questionSection[0].classList.remove("hide");
}

// create an event listener for the button to start the game
startBtn.addEventListener("click", function(event) {
    event.preventDefault();

    theGame();
    

});



