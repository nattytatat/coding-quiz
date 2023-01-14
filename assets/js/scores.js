var highScores = document.querySelector("#highscores");
var allScores = [];

// // // loop through the locally stored score keys and display in the ordered list
// for (var i = 0; i < localStorage.length; i++) {
//     // use key method to index the contents - assign to a variable
//     var key = localStorage.key(i);
//     var score = localStorage.getItem(key);
//     var scoreItem = document.createElement("li");
//     scoreItem.textContent = key + " - " + score;
//     highScores.appendChild(scoreItem);
// }

// need to have highest score at top
