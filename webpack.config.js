var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require("copy-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var inProduction = (process.env.NODE_ENV === 'production');

module.exports = {
	entry: {
		app: [
			'./index.js'
		]
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: '[name].js'
	},
	devtool: !inProduction && "source-map",
	module: {
		rules: [{
				test: /\.s[ac]ss$/,
				use: ExtractTextPlugin.extract({
					use: [{
							loader: 'css-loader',
							options: {
								sourceMap: !inProduction
							}
						},
						{
							loader: 'sass-loader',
							options: {
								sourceMap: !inProduction
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
			template: './index.html'
		}),
		new CopyWebpackPlugin([{
			from: 'assets',
			to: ''
		}]),
	],
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		compress: true,
		port: 9000
	},
};
if (inProduction) {
	module.exports.plugins.push(
		new webpack.optimize.UglifyJsPlugin()
	)
}
