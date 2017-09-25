import _ from 'lodash';
import updateBackground from './updateBackground.js';
import style from './style.css';
import Icon from './icon.png';

function component() {
    var element = document.createElement('div');
	updateBackground();

	var windowHeight = window.innerHeight - 40;
    document.body.style.height = windowHeight + "px";

	function setWindowHeight(){
	    var windowHeight = window.innerHeight - 40;
	    document.body.style.height = windowHeight + "px";
	}

	window.addEventListener("resize",setWindowHeight,false);

	window.addEventListener('click', updateBackground);


	// Add the image
	var myIcon = new Image();
	myIcon.src = Icon;

	element.appendChild(myIcon);
	

    return element;
}

document.body.appendChild(component());