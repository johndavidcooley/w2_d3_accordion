// Javascript Entry Point
import $ from 'jquery';

$('.two').on('click', function() {
	$('.two').toggleClass('trans-2');
});

$('.three-h').on('click', function() {
	$('.three').toggleClass('trans-3');
});
// I do not know why these function
// are not working. I tried changing
// classes to ids, altering the Sass,
// and changing HTML elements to get
// these to work. When I inspect the
// element, it shows that the classes
// .trans-2 and .trans-3 are toggled
// on and off, but the CSS of the
// classes seems to be overridden by
// the classes .two and .three that
// are established in index.html.
// I do not know why the positioning
// of the toggling classes does not
// override the CSS of the HTML classes.