const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: {
		app: './src/index.js',
		updateBackground: './src/updateBackground.js'
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			title: 'Meow Manijado'
		})
	],
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	}
};