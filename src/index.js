import 'normalize.css'
import './styles/app.scss'
import './styles/kellen.css'
import './js/kellen.js'
import data from './data.json';
import image from 'src/images/logo.png'




function component() {
	const element = document.createElement('div');

	// Lodash, now imported by this script
	element.innerHTML = _.join(['Hello', 'webpack'], ' ');
	element.classList.add('hello');

	// Add the image to our existing div.
	const logo = new Image();
	logo.src = logo;

	element.appendChild(logo);

	console.log(Data);

	return element;
}