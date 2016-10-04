// Call notification like this: pin.addPinwheel('img/icon.png', 'Pinwheel', 'Bold Title', 'This is a Pinwheel notification called by pin.addPinwheel(args);', 'light');

var pin = new Pinwheel();

function Pinwheel() {
  var app = this;
  
  app.addPinwheel = function(icon, title, bold, text, color) {
    title = title || 'Pinwheel';
    title = title.toUpperCase();
    color = color || 'light';
    if(color === 'light') {
      var theme = 'pin-notification-light';
    } else {
      var theme = 'pin-notification-dark';
    }
    if($$('.pinwheeler').hasClass('pinwheel-active') === true) {
      $$('.pinwheeler').removeClass('pinwheeler-active');
      setTimeout(function() { 
        
      },1000);
    } else {
    $$('.pinwheel').html('<div class="'+theme+' pinwheeler"><div class="pin-top"><div class="pin-img"><img src="'+icon+'" /></div><div class="pin-title">'+title+'</div><div class="pin-dismiss" onclick="pin.removePinwheel();">Close</div></div><div class="pin-bold">'+bold+'</div><div class="pin-text">'+text+'</div></div>');
    setTimeout(function() {
      $$('.pinwheeler').addClass('pinwheeler-active');
    },10);
    }
  }
  app.removePinwheel = function() {
    $$('.pinwheeler').removeClass('pinwheeler-active');
    setTimeout(function() {
      $$('.pinwheel').html('');
    },1000);
  }
}
