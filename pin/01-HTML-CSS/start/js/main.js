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

});
