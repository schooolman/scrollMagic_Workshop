$(document).ready(function(){
//Init ScrollMagic

var controller = new ScrollMagic.Controller();

//scene 1 - pin the second section
var pinsScene01 = new ScrollMagic.Scene({
  triggerElement: '#slide01',
  triggerHook: 0,
  duration: '100%'
})
.setPin('#slide01 .pin-wrapper')
.addTo(controller)
;

//scene 2 - pin the second section
var pinsScene02 = new ScrollMagic.Scene({
  triggerElement: '#slide01',
  triggerHook: 0,
  duration: '200%'
})
.setPin('#slide02 .pin-wrapper')
.addTo(controller)
;


});
