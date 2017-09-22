const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: {
		app: './src/index.js',
		updateBackground: './src/updateBackground.js'
	},
	output: {
		filename: 'dist/[name].bundle.js',
		publicPath: './'
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin()
	]
	
};