var gulp = require('gulp');
var cfg = require('../config.js');
var livereload = require('gulp-livereload');

// Watcher --------------------------------------------------------------------
gulp.task('watcher', function () {
	
	var watcherJS = gulp.watch(cfg.srcPaths.js, ['jshint', 'js']);
	watcherJS.on('change', function(event) {
		console.log(cfg.coloredPrefix + 'File '+ event.path.green +' was '+ event.type.green);
	});

	var watcherCSS = gulp.watch(cfg.srcPaths.css, ['css']);
	watcherCSS.on('change', function(event) {
		console.log(cfg.coloredPrefix + 'File '+ event.path.green +' was '+ event.type.green);
	});

	var watcherHTML = gulp.watch(cfg.srcPaths.html, ['w3cjs']);
	watcherHTML.on('change', function(event) {
		console.log(cfg.coloredPrefix + 'File '+ event.path.green +' was '+ event.type.green);
	});

	livereload.listen();
  	gulp.watch(cfg.livereloadPaths).on('change', livereload.changed);
});