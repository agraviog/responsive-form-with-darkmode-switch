function darkMode() {

//toggle input//
  var element = document.getElementById('fieldInput_profile');
  element.classList.toggle("darkMode");

  var element = document.getElementById('fieldInput_email');
  element.classList.toggle("darkMode");

  var element = document.getElementById('fieldInput_message');
  element.classList.toggle("darkMode");

//hover input//

var element = document.getElementById('fieldInput_profile');
  element.classList.toggle("darkMode:hover");

//focus input//

  var element = document.getElementById('fieldInput_profile');
  element.classList.toggle(".darkMode:focus");

//Wrapper BG//

  var element = document.getElementById('whiteWrapper');
  element.classList.toggle("darkContainer");

//color h1//

var element = document.getElementById('headerTitle');
element.classList.toggle("darkH1");

//Section wrapper//

var element = document.getElementById('wholeWrapperBg');
element.classList.toggle("darkWholeWrapper");

//Input Icons//

var element = document.getElementById('iconProfile');
element.classList.toggle("darkIcon");

var element = document.getElementById('iconEmail');
element.classList.toggle("darkIcon");

var element = document.getElementById('iconMessage');
element.classList.toggle("darkIcon");

//Dark Mode On/off text//

var element = document.getElementById('darkModeTextOff');
element.classList.toggle("darkModeTextOffClick");

var element = document.getElementById('darkModeTextOn');
element.classList.toggle("darkModeTextOnClick");

}