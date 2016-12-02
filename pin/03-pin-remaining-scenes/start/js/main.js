$(document).ready(function(){

	// Init ScrollMagic
	var controller = new ScrollMagic.Controller();

	// Scene 1 - pin the second section
	var pinScene01 = new ScrollMagic.Scene({
		triggerElement: '#slide01',
		triggerHook: 0,
		duration: '100%'
	})
	.setPin('#slide01 .pin-wrapper')
	.addTo(controller)
	;

	// Scene 2 - pin the third section
	var pinScene02 = new ScrollMagic.Scene({
		triggerElement: '#slide01',
		triggerHook: 0,
		duration: '200%'
	})
	.setPin('#slide02 .pin-wrapper')
	.addTo(controller)
	;

});
