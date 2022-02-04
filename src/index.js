import 'normalize.css'
import './styles/kellen.css'
import './styles/app.scss'
import '../public/data.json'
import './js/kellen'

const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
}
