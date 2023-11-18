const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./index.tsx",
	mode: "development",
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".jsx"],
		alias: {
			react: "preact/compat",
			"react-dom": "preact/compat",
		},
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader", "postcss-loader"],
			},
		],
	},
	output: {
		filename: "index.js",
		path: path.resolve(__dirname, "dist"),
	},
	devServer: {
		static: {
			directory: path.resolve(__dirname, "dist"),
		},
		hot: true,
		compress: true,
		port: 9000,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "index.html",
		}),
	],
};
