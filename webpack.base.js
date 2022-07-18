module.exports = {
	module: {
		rules: [{
			test: /\.js?$/,
			loader: "babel-loader",
			exclude: /node_modules/,
			options: {
				presets:["@babel/preset-react",[
					"@babel/preset-env",
					{
						targets: [
							"> 1%",
							"last 2 version"
						],
						useBuiltIns: "usage",
						corejs: 3
					}
				],]
			}
		}]
	}
}
