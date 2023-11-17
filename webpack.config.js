const path = require("path");

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
		],
	},
	output: {
		filename: "index.js",
		path: path.resolve(__dirname, "dist"),
	},
};
