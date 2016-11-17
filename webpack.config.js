const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
	app: path.join(__dirname, 'app'),
	build: path.join(__dirname, 'build')
}

module.exports = {
	entry: {
		app: PATHS.app
	},
	output: {
		path: PATHS.build,
		filename: "bundle.js"
	},
	module: {
		loaders: [
	// 		{ test: /\.css$/, loader: "style!css" },
			{ test: /\.jsx?$/, 
				loaders: ['babel-loader'],
				include: PATHS.app
			}
		]
	}
};