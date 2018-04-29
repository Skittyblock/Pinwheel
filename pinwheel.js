// Pinwheel JS by Skittyblock

var pin = new Pinwheel();

function Pinwheel() {
  var app = this;
  
  app.addPinwheel = function(icon, title, bold, text, color) {
    title = title || 'Pinwheel';
    title = title.toUpperCase();
    color = color || 'light';
    var pad = 'pad';
    if (bold) {
      bold = '<div class="pin-bold">'+bold+'</div>';
      pad = '';
    }
    if($('.pin-notification').hasClass('active')) {
      $('.pin-notification').toggleClass('active');
    } else {
      $$('.pinwheel-overlay').html('<div class="pin-notification '+color+'"><div class="pin-top"><div class="pin-img"><img src="'+icon+'" /></div><div class="pin-title">'+title+'</div><div class="pin-dismiss" onclick="pin.removePinwheel();">Close</div></div>'+bold+'<div class="pin-text '+pad+'">'+text+'</div></div>');
      setTimeout(function() {
        $$('.pin-notification').toggleClass('active');
      },10);
    }
  }
  app.removePinwheel = function() {
    $$('.pin-notification').removeClass('active');
    setTimeout(function() {
      $$('.pinwheel-overlay').html('');
    },1000);
  }
}
