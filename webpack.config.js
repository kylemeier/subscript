const path = require('path');


module.exports = {
	entry: {
		app: path.join(__dirname, 'app'),
	},
	output: {
		path: path.join( __dirname, 'build'),
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{ test: /\.css$/, loader: "style!css" },
			{ test: /\.jsx?$/, 
				loaders: 'babel-loader',
				include: path.join(__dirname, 'app')
			}
		]
	}
};