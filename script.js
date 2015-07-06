var pec = 0; // passed elements count
var timer;  // timer used to call blink function

function blink() {
	var banners = document.getElementsByClassName('banner'); // get all banners
  
  if ( pec != 0 ) {
  	banners[this.pec - 1].classList.remove('banner-hover'); // disable hover effect on element
  }
  if (pec < 4) {
    banners[this.pec].classList.add('banner-hover'); // enable hover effect on element
  } else {
  	clearInterval(this.timer);
	  pec = 0;
  }
  pec++;
}

function start_effect() {
  timer = setInterval('blink()', 200); // define timer
}

function init() {
  setTimeout('start_effect()', 1000); // wait a minute, and start blink effect
}