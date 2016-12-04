$(document).ready(function(){

	// move the pend body up to connect with the first part
	TweenMax.set('.part3', {y: -572});

	// hide all headings and text
	// TweenMax.set('h2', {autoAlpha: 0});
	// TweenMax.set('p', {autoAlpha: 0});
	TweenMax.set(['.parts h2, .parts p'], {autoAlpha: 0});

	//create a tween that will move the pen boddy back to its original css position
	var bodyToStart = TweenMax.to('.part3', 1, {y: 0, ease:Linear.easeNone, pause: true});

	//Init ScrollMagic Controller

	var controller = new ScrollMagic.Controller();

	var bodyToStarScene = new ScrollMagic.Scene ({
		triggerElement: ('.part1'),
		triggerHook: 1,
		offset: 287,
		duration: 572
	})
	.setTween(bodyToStart)
	.addIndicators()
	.addTo(controller)
	;

});
