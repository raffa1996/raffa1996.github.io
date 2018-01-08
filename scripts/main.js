var myImage = document.querySelector('img'); 
myImage.onclick = function () {
	var mysrc = myImage.getAttribute('src');
	if(mysrc === 'images/firefox-icon.png') 
	{
		myImage.setAttribute('src', 'images/firefox2.png'); 
	}
	else {
		myImage.setAttribute('src', 'images/firefox-icon.png'); 
	}
}

var myButton = document.querySelector('button'); 
var myHeading = document.querySelector('h1'); 

function setUserName() {
	var myName = prompt('Please enter your name.'); 
	localStorage.setItem('name', myName); 
	myHeading.textContent = 'Mozilla is cool, ' + myName; 

if(!localStorage.setItem('name')) 
{	setUserName(); 
} else {
	var myStoredName = localStorage.getItem('name'); 
	myHeading.textContent = 'Mozilla is cool, ' + myStoredName; 
}
}
myButton.onclick = function() {
	setUserName(); 
}