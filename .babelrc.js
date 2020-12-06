module.exports = {
	"presets": [
		["@babel/env", {
			"modules": 'commonjs',
			"targets": {
				"browsers": []
			},
			"useBuiltIns": "usage",
			"debug": true,
		}],
		"@babel/preset-react"
	],
	"plugins": [
		"react-hot-loader/babel",
		"@babel/plugin-transform-runtime",
		"@babel/plugin-proposal-class-properties",
		"@babel/plugin-syntax-dynamic-import",
		"@babel/plugin-proposal-object-rest-spread",
		["import", { "libraryName": "antd", "style": true }]
	]
}