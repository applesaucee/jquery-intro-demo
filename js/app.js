/* app.js
* main script file for our little application
* */

"use strict";

// CLASS WORK 10/30
var tile = 'img/sec1.jpg';
var info = 'some other data';

var gameBoard = $('#game-board');

//create and configure a new <img> element...
var newTile = $(document.createElement('img'));

newTile.attr('src', 'img/background.jpg');
newTile.attr('alt', 'photo of nature');
newTile.attr('width', '250px');

//use the .data() method to associate extra data with HTML elements
newTile.data('assocTile', tile); // first param is a key
newTile.data('tileInfo', info); // second param is a value

//add to the board
gameBoard.append(newTile);


//when an image in game-board is clicked
$('#game-board img').click(function(){
	// remember that 'this' refers to the DOM element that raised
	// the event; wrapped in jQuery $() to get more functionality
	var clickedImage = $(this);
	var tileData1 = clickedImage.data('assocTile');
	var tileData2 = clickedImage.data('tileInfo');

	clickedImage.attr('src', tileData1);
	clickedImage.attr('alt', tileData2);
	
	console.log(tileData1);
	console.log(tileData2);
});

//iterate over array, calling passed function for each element
//also works with objects

var array = ['a', 'b', 'c', 'd'];

_.forEach(array, function(element, index) {

 console.log(element);
 console.log(index);

});

//set operations

_.difference(array, ['c', 'd']);

//stores as a new array of union of original + e f
//unless you store it in a variable, _.union will only return the value of what
// the union does to the original
var unionArray = _.union(array, ['e','f']); 

_.intersection(array, ['b', 'c']);

//new array of numbers
var numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// show me the even values of the array
var evens = _.filter(numArray, function(num) {return 0 == num % 2;});
console.log(evens);

//shuffle() returns a new shuffled array,
//leaving the original array intact

var shuffledArray = _.shuffle(numArray);

console.log(shuffledArray);
console.log(numArray);
console.log(array);
console.log(unionArray);

/*
 ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄       ▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄ 
▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░▌     ▐░░▌▐░░░░░░░░░░░▌▐░▌
 ▀▀▀▀█░█▀▀▀▀  ▀▀▀▀█░█▀▀▀▀ ▐░▌░▌   ▐░▐░▌▐░█▀▀▀▀▀▀▀▀▀ ▐░▌
     ▐░▌          ▐░▌     ▐░▌▐░▌ ▐░▌▐░▌▐░▌          ▐░▌
     ▐░▌          ▐░▌     ▐░▌ ▐░▐░▌ ▐░▌▐░█▄▄▄▄▄▄▄▄▄ ▐░▌
     ▐░▌          ▐░▌     ▐░▌  ▐░▌  ▐░▌▐░░░░░░░░░░░▌▐░▌
     ▐░▌          ▐░▌     ▐░▌   ▀   ▐░▌▐░█▀▀▀▀▀▀▀▀▀ ▐░▌
     ▐░▌          ▐░▌     ▐░▌       ▐░▌▐░▌           ▀ 
     ▐░▌      ▄▄▄▄█░█▄▄▄▄ ▐░▌       ▐░▌▐░█▄▄▄▄▄▄▄▄▄  ▄ 
     ▐░▌     ▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░▌
      ▀       ▀▀▀▀▀▀▀▀▀▀▀  ▀         ▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀                                        
*/

var startTime = _.now();
console.log(startTime);

var timer; //hold our timer value

//use window.setInterval to create a timer that runs a function every second

timer = window.setInterval(onTimer, 10);

function onTimer() {
	//compare the value of _.now() to start time to get elapsed time
	//Math.floor() rounds down to the nearest integer
	var elapsedSeconds = Math.floor((_.now() - startTime) / 10);
	console.log(elapsedSeconds);
	$('#game-board h2').css("font-size", elapsedSeconds + 'px');
}

function stopTimer() {
	window.clearInterval(timer);
	$('#game-board').empty();
}

$('.jumbotron').click(stopTimer);

/*
States we care about in this game
-total amount of unfound matches(status display to user)
-time since the start of the game(status display to user)
-number of non-matches(status to user)

For tiles
-has this tile been matched
	if yes - show, don't allow new clicks (don't act on them)
	if no - flip back over (or stay flipped)
-has this tile been clicked?
-how many tiles have been clicked (true)?
	reset after second click back to false

Restarting the game
Win notification

*/


//THIS IS FOR IN CLASS WORK 10/28
/*//select all navigation links
var allNavLinks = $('nav a');

//select all imgs
var allImgs = $('img');

var allSections = $('section');

function onReady() {
	$('nav').slideUp(1000); //in milliseconds; animations
	$('nav').slideDown();
	allSections.hide();

	//add attribute of target with value blank to each nav link
	//allNavLinks.attr('target', '_blank');
}

$('#exit-button').dblclick(function() {
	//show the modal
	$('#confirm-exit-modal').modal();
});

$('#confirm-exit-button').click(function() {
	window.location.href = 'http://courses.washington.edu/info343/morris';
});

allImgs.hover(function() {
	//console.log($(this));
	$(this).addClass('awesomesauce');
});

allImgs.mouseout(function() {
	$(this).removeClass('awesomesauce');
});

//passing a function within a function
allNavLinks.click(function() {
	//the cooler jQuery this - it's totally money
	console.log($(this).attr('href'));


	//he plain version of this...it's okay.
	console.log(this);

	//acts on the jQuery object containing this element
	
	//.fade for once. .fadeToggle to go back and forth
	allSections.hide();
	//chaining lets us do multiple calls over and over again. 
	//.fadeToggle returns the original object you acted upon, which lets continue working on the same item
	$($(this).attr('href')).fadeToggle(1000).addClass('awesomesauce'); //double jquery call to get at a specific section

});


$(onReady);
*/