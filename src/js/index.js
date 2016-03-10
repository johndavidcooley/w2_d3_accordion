// Javascript Entry Point
import $ from 'jquery';

$('.one-h').on('click', function() {
	$('.para-one').toggleClass('trans-one');
	$('.para-two').removeClass('trans-two');
	$('.para-three').removeClass('trans-three');
});

$('.two-h').on('click', function() {
	$('.para-one').removeClass('trans-one');
	$('.para-two').toggleClass('trans-two');
	$('.para-three').removeClass('trans-three');
});

$('.three-h').on('click', function() {
	$('.para-one').removeClass('trans-one');
	$('.para-two').removeClass('trans-two');
	$('.para-three').toggleClass('trans-three');
});