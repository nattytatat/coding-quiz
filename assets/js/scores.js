var highScores = document.querySelector("#highscores");


// // loop through all the keys in local storage

// for (var i = 0; i < localStorage.length; i++) {
//     var key = localStorage.key(i);

//     // use localstorage get item method to get values
//     var playerDataJSON = localStorage.getItem(key);
//     // parse into JS object
//     var playerData = JSON.parse(playerDataJSON);
//     //push all scores into an emoty array
//     allScores.push(playerData);

// }

// // Loop through the array using `forEach()` method to access each player's name and score
// allScores.forEach(function(playerData) {
//     // Create a new list item
//     var newListItem = document.createElement("li");

//     // Set the text content of the list item to the player's name and score
//     newListItem.textContent = playerData.name + ": " + playerData.score;

//     // Append the list item to the ordered list
//     highScores.appendChild(newListItem);
// });
// // // // loop through the locally stored score keys and display in the ordered list
// // for (var i = 0; i < localStorage.length; i++) {
// //     // use key method to index the contents - assign to a variable
// //     var key = localStorage.key(i);
// //     var score = localStorage.getItem(key);
// //     var scoreItem = document.createElement("li");
// //     scoreItem.textContent = key + " - " + score;
// //     highScores.appendChild(scoreItem);
// // }

// // need to have highest score at top
