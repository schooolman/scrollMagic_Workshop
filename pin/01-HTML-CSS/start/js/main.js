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

//scene 3 - pin the third section
var pinsScene03 = new ScrollMagic.Scene({
    triggerElement: '#slide02',
    triggerHook: 0,
    duration: '200%'
})
.setPin('#slide03 .pin-wrapper')
.addTo(controller)
;

//Scene 4 - Pin the fourth section
var pinsScene04 = new ScrollMagic.Scene({
    triggerElement: '#slide03',
    triggerHook: 0,
    duration: '100%'
})
.setPin('#slide04 .pin-wrapper')
.addTo(controller)
;


});
