const path= require('path');
	const HtmlWebpackPlugin = require('html-webpack-plugin');
	
	module.exports ={
		entry: './src/app/index.js',
		output: {
			path: path.join(__dirname, 'dist'),
			filename: 'bundle.js'
		},
		devServer:{
			port: 3000
		},
		module:{
			rules: [
				{
					test: /\.js$/,
					loader: 'babel-loader',
					exclude: /node_modules/
				}
			]
		},
		plugins:[
			new HtmlWebpackPlugin({
				template: './src/index.html'
			})
		]
		
	}