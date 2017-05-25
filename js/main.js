$(document).on('pageload', function(){
	$('.parallax').parallax();
	$('.tabs').tabs();
	$('.dropdown-button').dropdown();
  $('.modal-trigger').leanModal({
    dismissible: true,
    opacity: .5,
    complete: function() { 
      $(document).trigger('modalclose');
    }
  });

  if (!navigator.getUserMedia) {
    $('.code-scan').hide();
  }
});


// var connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
// var type = connection.type;

// function updateConnectionStatus() {
//   console.log("Connection type is change from " + type + " to " + connection.type);
// }

// connection.addEventListener('typechange', updateConnectionStatus);