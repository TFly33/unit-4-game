// 2. The player will have to guess the answer, just like in Word Guess. This time, though, the player will guess with numbers instead of letters. 

// 3. Here's how the app works:

//    * There will be four crystals displayed as buttons on the page.

//    * The player will be shown a random number at the start of the game.

//    * When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 

//      * Your game will hide this amount until the player clicks a crystal.
//      * When they do click one, update the player's score counter.

//    * The player wins if their total score matches the random number from the beginning of the game.

//    * The player loses if their score goes above the random number.

//    * The game restarts whenever the player wins or loses.

//      * When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

//    * The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

// ##### Option 1 Game design notes

// * The random number shown at the start of the game should be between 19 - 120.

// * Each crystal should have a random hidden value between 1 - 12.


$(document).ready(function () {
  // I'm gonna start with some variables. 

  // This is going to be my random number. I just need to make sure it doesn't reset when until a win or loss function happens. 
  var computerGuess = Math.floor(Math.random() * 120) + 1;
  // Let's console log that to make sure the random number is being generated. 
  console.log(computerGuess);
  // Some variables. 
  var wins = 0;
  var losses = 0;
  var userScore = 0;
  var computerGuess = 0;
  var button1 = 0;
  var button2 = 0;
  var button3 = 0;
  var button4 = 0;
  // Now we want to assign the random value to the buttons. But they need to be 1-12. 
  function newGame() {
    button1 = Math.floor(Math.random() * 12) + 1;
    button2 = Math.floor(Math.random() * 12) + 1;
    button3 = Math.floor(Math.random() * 12) + 1;
    button4 = Math.floor(Math.random() * 12) + 1;
    computerGuess = 1 + Math.floor(Math.random() * 120);
    // Let's console log that to make sure we're getting an assignment. 
    console.log(button1);
    console.log(button2);
    console.log(button3);
    console.log(button4);
    console.log(userScore);
    console.log(computerGuess);
  };

  // Now we need to make a win and loss variable function. 
  function winLoss() {
    if (userScore === computerGuess) {
      wins++;
      console.log(wins);
    }
    if (userScore > computerGuess) {
      losses++;
      console.log(losses);
    }
  }
  // We need a reset function. A function that will automatically reset the userscore and computerguess. 
  function reset () {
    userScore = 0;
    computerGuess = 0;
    newGame();
  };

// Our newGame function will run each time the game is reset. It will include randomized values for all four buttons. 
  newGame();

  computerGuess = Math.floor(Math.random() * 120) + 1;

  $("#button-1").on("click", function () {
    userScore = button1 + userScore;
    console.log(userScore);
    $("#Score").text("Result: " + userScore);
  });
  $("#button-2").on("click", function () {
    userScore = button2 + userScore;
    console.log(userScore);
    $("#Score").text("Result: " + userScore);
  });
  $("#button-3").on("click", function () {
    userScore = button3 + userScore;
    console.log(userScore);
    $("#Score").text("Result: " + userScore);
  });
  $("#button-4").on("click", function () {
    userScore = button4 + userScore;
    console.log(userScore);
    $("#Score").text("Result: " + userScore);
  });

  winLoss();
  reset();

});

// Let's make the buttons and make sure we are getting a random value for each. 

// Need to run the game before the clicking starts so the button's values are set. 

// newGame();

// $("#button-1").on("click", function () {
//   userScore = userScore + button1;
//   console.log(userScore);
//   $("userScore").text(userScore);
// });
// $("#button-2").on("click", function () {
//   userScore = userScore + button2;
//   console.log(userScore);
//   $("userScore").text(userScore);
// });
// $("#button-3").on("click", function () {
//   userScore = userScore + button3;
//   console.log(userScore);
//   $("userScore").text(userScore);
// });
// $("#button-4").on("click", function () {
//   userScore = userScore + button4;
//   console.log(userScore);
//   $("userScore").text(userScore);
// });
//         // Link text to HTML so the user can see it. 
//       });


//       // Link text to HTML so the user can see it. 
//     });

//     // Link text to HTML so the user can see it. 
//   });

//   // Link text to HTML so the user can see it. 
// });



//   Need a reset all function. 
// Need an if else statement for the win/loss. That then leads to the reset, but the wins and losses stay the same. 
// Need a userscore that everytime the crystal is clicked submits. 
// Create four onclick functions for each button. 

