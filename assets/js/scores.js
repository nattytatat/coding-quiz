var highScores = document.querySelector("#highscores");
var clearList = document.querySelector("#clear");

// // loop through all the keys in local storage
var playerScores = localStorage.getItem("playerScores");
playerScores = JSON.parse(playerScores);

// check if null as error is logged when clearing storage
if (playerScores !== null) {

    for (var i = 0; i < playerScores.length; i++) {
        var newScore = document.createElement("li");
        newScore.textContent = playerScores[i].name + " - " + playerScores[i].score;
        highScores.appendChild(newScore);
    }

}
clearList.addEventListener("click", function () {
    localStorage.clear();
    clearList.innerHTML = "";
});
