$( document ).ready(function() {

console.log( "ready!" );

var totalNum = 0;
var wins = 0;
var losses = 0;
var randomNum = Math.floor(Math.random() * 101 + 19);
var num1 = Math.floor(Math.random() * 11 + 1);
var num2 = Math.floor(Math.random() * 11 + 1);
var num3 = Math.floor(Math.random() * 11 + 1);
var num4 = Math.floor(Math.random() * 11 + 1);

$('.randomNumber').html('<h1>' + randomNum + '</h1>');

$('.winsLosses').html('<p> Wins: ' + wins + '</p>' + '<p> Losses: ' + losses + '</p>');

function reset(){
	randomNum = Math.floor(Math.random() * 101 + 19);
	$('.randomNumber').html('<h1>' + randomNum + '</h1>');
	num1 = Math.floor(Math.random() * 11 + 1);
	num2 = Math.floor(Math.random() * 11 + 1);
	num3 = Math.floor(Math.random() * 11 + 1);
	num4 = Math.floor(Math.random() * 11 + 1);
	totalNum = 0;
	$('.totalScore').html('<p>' + totalNum + '</p>').appendTo('.scoreHeader');
};

function winAlert(){
	$('.winLossAlertBox').html('<h1>You won!</h1>');
	wins++;
	$('.winsLosses').html('<p> Wins: ' + wins + '</p>' + '<p> Losses: ' + losses + '</p>');
	reset();
};

function lossAlert(){
	$('.winLossAlertBox').html('<h1>You lost! :(</h1>');
	wins++;
	$('.winsLosses').html('<p> Wins: ' + wins + '</p>' + '<p> Losses: ' + losses + '</p>');
	reset();
};

$('.crystal1').on('click', function(){
	totalNum = totalNum + num1;
	$('.totalScore').html('<p> Your total score is:<br>' + totalNum + '</p>').appendTo('.scoreHeader');
	if(totalNum === randomNum){
		winAlert();
	} else if(totalNum > randomNum){
		lossAlert();
	};
});

$('.crystal2').on('click', function(){
	totalNum = totalNum + num2;
	$('.totalScore').html('<p> Your total score is:<br>' + totalNum + '</p>').appendTo('.scoreHeader');
	if(totalNum === randomNum){
		winAlert();
	} else if(totalNum > randomNum){
		lossAlert();
	};
});

$('.crystal3').on('click', function(){
	totalNum = totalNum + num3;
	$('.totalScore').html('<p> Your total score is:<br>' + totalNum + '</p>').appendTo('.scoreHeader');
	if(totalNum === randomNum){
		winAlert();
	} else if(totalNum > randomNum){
		lossAlert();
	};
});

$('.crystal4').on('click', function(){
	totalNum = totalNum + num4;
	$('.totalScore').html('<p> Your total score is:<br>' + totalNum + '</p>').appendTo('.scoreHeader');
	if(totalNum === randomNum){
		winAlert();
	} else if(totalNum > randomNum){
		lossAlert();
	};
});

});

// The player will have to guess the answer, just like in Hangman.
// This time, though, the player will guess with numbers instead of letters.
// Here's how the app works: There will be four crystals displayed as buttons on the page.
// The player will be shown a random number at the start of the game.
// When the player clicks on a crystal, it will add a specific
// amount of points to the player's total score.
// Your game will hide this amount until the player clicks a crystal.
// When they do click one, update the player's score counter.
// The player wins if their total score matches 
// the random number from the beginning of the game.
// The player loses if their score goes above the random number.
// The game restarts whenever the player wins or loses.
// When the game begins again, the player should see a new random number. 
// Also, all the crystals will have four new hidden values. 
// Of course, the user's score (and score counter) will reset to zero.
// The app should show the number of games the player wins and loses. 
// To that end, do not refresh the page as a means to restart the game.

// Option 1 Game design notes
// The random number shown at the start of the game should be between 19 - 120.
// Each crystal should have a random hidden value between 1 - 12.





