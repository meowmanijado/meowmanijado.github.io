import _ from 'lodash';
import updateBackground from './updateBackground.js';

function component() {
    var element = document.createElement('div');

	element.innerHTML = _.join(['Hello', 'webpack'], ' ');

	updateBackground();

	window.addEventListener('click', updateBackground);

    return element;
}

document.body.appendChild(component());