const path = require('path')
const webpack = require('webpack')
const config = require('../config')
module.exports = {
	mode:'production',
	entry:{
		vendors:['vue/dist/vue.esm.js','vue-router','axios','vuex','fastclick','vue-wechat-title'],
	},
	output:{
		filename:'[name].dll.js',
		path:path.resolve(__dirname,config.build.assetsRoot,config.build.assetsDllDirectory),
		library:'[name]'
	},
	plugins:[
		new webpack.DllPlugin({
			name:'[name]',
			path:path.resolve(__dirname,config.build.assetsRoot,config.build.assetsDllDirectory,'[name].manifest.json')
		})
	]
}