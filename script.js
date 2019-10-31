
// dimmer ON
$('#dimmer').dimmer('show');

// dimmer OFF
var i;
var text =0;
for (i = 0; i < 1000000000000000000; i++) {
  text += i + "<br>";
  
  if ( i = 999999999999999999) {
	  done()
  }
}
function done() {
	$('#dimmer').dimmer('hide');
}

