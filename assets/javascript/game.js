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
      reset();
    }
    else if (userScore > computerGuess) {
      losses++;
      console.log(losses);
      reset();
    }

  }
  // We need a reset function. A function that will automatically reset the userscore and computerguess. 
  function reset() {
    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses);
    console.log("---" + computerGuess);
    console.log("---" + userScore);
    userScore = 0;
    $("#Score").text("UserScore: " + userScore);
    computerGuess = Math.floor(Math.random() * 120) + 1;
    $("#computerGuess").text("Computer Guess: " + computerGuess);
    newGame();
  };

  // Our newGame function will run each time the game is reset. It will include randomized values for all four buttons, as well as a randomized computerguess. 

  reset();


  $("#button-1").on("click", function () {
    userScore = button1 + userScore;
    console.log(userScore);
    $("#Score").text("UserScore: " + userScore);
    winLoss();
  });
  $("#button-2").on("click", function () {
    userScore = button2 + userScore;
    console.log(userScore);
    $("#Score").text("UserScore: " + userScore);
    winLoss();
  });
  $("#button-3").on("click", function () {
    userScore = button3 + userScore;
    console.log(userScore);
    $("#Score").text("UserScore: " + userScore);
    winLoss();
  });
  $("#button-4").on("click", function () {
    userScore = button4 + userScore;
    console.log(userScore);
    $("#Score").text("UserScore: " + userScore);
    winLoss();
  });

});
