var colors = require('colors'); // get colors in your node.js console like what

module.exports = {
	
	// Colored prefix
	coloredPrefix : '['.white + "gulp".cyan.bold + "] ".white,

	// Source Paths
	srcPaths : {
		html: ['src/**/*.html'],
		js: ['src/js/vendor/jquery-1.11.0.js', 'src/js/**/*.js'],
		img: 'src/img/**/*',
		less: 'src/less/**/main.less',
		css: ['src/less/**/*.css', 'src/less/**/*.less']
	},

	// Distribution Paths
	distPaths : {
		html: ['src/**/*.html'], // doesn't change
		js: 'dist/js/',
		img: 'dist/img/',
		less: 'dist/css'
	},

	// Livereload Paths
	livereloadPaths : ['src/**/*.html', 'dist/img/**/*', 'dist/js/**/*', 'dist/css/**/*'],

	// JShint Paths
	jshintPaths : ['!src/js/vendor/*.js', 'src/js/**/*.js'],
};