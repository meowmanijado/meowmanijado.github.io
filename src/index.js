import _ from 'lodash';
import updateBackground from './updateBackground.js';
import style from './style.css'



function component() {
    var element = document.createElement('div');

	element.innerHTML = _.join(['Hello', 'webpack'], ' ');
	element.classList.add('hello');

	updateBackground();

	var windowHeight = window.innerHeight - 40;
    document.body.style.height = windowHeight + "px";

	function setWindowHeight(){
	    var windowHeight = window.innerHeight - 40;
	    document.body.style.height = windowHeight + "px";
	}
	
	window.addEventListener("resize",setWindowHeight,false);

	window.addEventListener('click', updateBackground);
	

    return element;
}

document.body.appendChild(component());