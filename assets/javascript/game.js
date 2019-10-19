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


$(document).ready(function() {

// I'm gonna start with some variables. 

// This is going to be my random number. I just need to make sure it doesn't reset when until a win or loss function happens. 
var computerGuess = 1 + Math.floor(Math.random() * 120);
// Let's console log that to make sure the random number is being generated. 
console.log (computerGuess);
// Now we want to assign the random value to the buttons. But they need to be 1-12. 
var button1 = 1 + Math.floor(Math.random() * 12);
var button2 = 1 + Math.floor(Math.random() * 12);
var button3 = 1 + Math.floor(Math.random() * 12);
var button4 = 1 + Math.floor(Math.random() * 12);
// Let's console log that to make sure we're getting an assignment. 
console.log (button1);
console.log (button2);
console.log (button3);
console.log (button4);
// alright, everything is correctly logging. 
// Let's also create variables for wins and losses, we need them to start at but increase given certain conditions. 
var wins = 0;
var losses = 0;
console.log (wins);
console.log (losses);
});


