let mix = require('laravel-mix');

mix.js('src/index.js', "js/script.min.js")
	.sass("src/index.scss", "css/style.min.css")
	.options({
		processCssUrls: false,
	})
	.webpackConfig({
		output: {
			publicPath: '/',
			chunkFilename: 'js/[name].[chunkhash].js',
		},
	})
	.disableNotifications();
