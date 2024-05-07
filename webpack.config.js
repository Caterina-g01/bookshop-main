const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
	mode: "development",
	plugins: [new MiniCssExtractPlugin(), new HtmlWebpackPlugin({
		title: 'webpack Boilerplate',
		template: path.resolve(__dirname, './src/index.html'), 
		filename: 'index.html', 
   }), new CopyPlugin({
      patterns: [
      { from: "src/images", to: "images" },
      ],
   }),
],
	entry: path.resolve(__dirname, './src/index.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js',
	},
	devServer: {
		static: {
			directory: path.join(__dirname, 'dist'),
		},
		client: {
			logging: 'info', 
			overlay: true,   
			progress: true   
		},
	},
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader', "sass-loader",]
			},
			 // изображения
			{
				test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
				type: 'asset/resource',
			},
			 // шрифты и SVG
			{
				test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
				type: 'asset/inline',
		},
		]
	},
	optimization: {
		minimize: true,
		minimizer: [new CssMinimizerPlugin()],
	},

}