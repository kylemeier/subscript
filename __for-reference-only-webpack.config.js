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
		filename: "bundle.js",
		publicPath: '/build'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	devServer: {
	    stats: {
	      colors: true,
	      hash: false,
	      version: false,
	      timings: false,
	      assets: false,
	      chunks: false,
	      modules: false,
	      reasons: false,
	      children: false,
	      source: false,
	      errors: false,
	      errorDetails: false,
	      warnings: false,
	      publicPath: false
	    }
	},
	module: {
		loaders: [
	// 		{ test: /\.css$/, loader: "style!css" },
			{ 
				test: /\.jsx?$/, 
				loader: 'babel-loader',
				include: PATHS.app,
				query: {
					presets: ['react', 'es2015']
				}
			}
		]
	}
};