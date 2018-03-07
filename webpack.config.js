var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require("copy-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var inProduction = (process.env.NODE_ENV === 'production');

module.exports = {

	entry: {
		app: [
		'./src/main.js',
		'./src/main.scss'
		]
	},

	output: {
		path: path.resolve(__dirname, './dist'),
		filename: '[name].js'
	},

	devtool: "source-map", 

	module: {
		rules: [

		{
			test: /\.s[ac]ss$/,
			use: ExtractTextPlugin.extract({
				use: [
				{
					loader: 'css-loader', options: {
						sourceMap: true
					}
				},
				{
					loader: 'sass-loader', options: {
						sourceMap: true
					}
				}
				],
				fallback: 'style-loader'
			})
		},

		{
			test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
			loader: 'file-loader?name=fonts/[name].[ext]'
		},

		{ 
			test: /\.js$/, 
			exclude: /node_modules/, 
			loader: "babel-loader"
		}

		]
	},

	plugins: [

	new ExtractTextPlugin("[name].css"),

	new webpack.LoaderOptionsPlugin({
		minimize: inProduction
	}),

	new HtmlWebpackPlugin({
		template: 'src/index.html'
	}),

	new CopyWebpackPlugin([
	{
		from: 'assets',
		to: ''
	}
	])

	]
};

if (inProduction) {
	module.exports.plugins.push(
		new webpack.optimize.UglifyJsPlugin()
		)
}

