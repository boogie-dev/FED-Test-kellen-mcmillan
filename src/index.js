import 'normalize.css'
import './styles/app.scss'
import './styles/kellen.css'
<<<<<<< HEAD
=======
import './js/kellen.js'
import data from './data.json';
import image from 'src/images/logo.png'


const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
},
module: {
	rules: [
		{
			test: /\.css$/i,
			use: ['style-loader', 'css-loader'],
		},
		{
			test: /\.(png|svg|jpg|jpeg|gif)$/i,
			type: 'asset/resource',
		},
		{
			test: /\.(woff|woff2|eot|ttf|otf)$/i,
			type: 'asset/resource',
		},
		{
			test: /\.(csv|tsv)$/i,
			use: ['csv-loader'],
		},
		{
			test: /\.xml$/i,
			use: ['xml-loader'],
		},
	],		
},

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
>>>>>>> 39802a161f1c66a4d97b0e056b5ce2af6fa9dab8
