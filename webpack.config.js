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
	devtool: 'inline-source-map',
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin()
	],
	module: {
		rules: [{
			test: /\.css$/,
			use: [
				'style-loader',
				'css-loader'
			]
		},
		{
			test: /\.(png|svg|jpg|gif)$/,
			use: [
				'file-loader'
			]
		}]
	}
	
};