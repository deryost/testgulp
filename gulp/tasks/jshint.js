var gulp = require('gulp');
var cfg = require('../config.js');
var jshint = require('gulp-jshint');

// JS validation --------------------------------------------------------------------
gulp.task('jshint', function() {
	console.log(cfg.coloredPrefix + 'jshint'.magenta + ' !!!'.red);
	gulp.src(cfg.jshintPaths)
		.pipe(jshint({strict: true}))
		//.pipe(jshint.reporter('default'))
		.pipe(jshint.reporter('jshint-stylish')) 
		.pipe(jshint.reporter('fail'))
		.on('error', function(){
			console.log(cfg.coloredPrefix + " jshint error !".red);
		})
});