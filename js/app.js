/* app.js
* main script file for our little application
* */

"use strict";

//select all navigation links
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