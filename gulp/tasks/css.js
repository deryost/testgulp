var gulp = require('gulp');
var less = require('gulp-less');
//var prefix = require('gulp-autoprefixer');
var cfg = require('../config.js');

// Less --------------------------------------------------------------------
gulp.task('css', function () {
	//
	gulp.src(cfg.srcPaths.less)
		// Grunt options can help here : https://github.com/gruntjs/grunt-contrib-less
		.pipe(less({
			compress: true,
			strictImports: true,
			strictMath: true,
			strictUnits: true,
			sourceMap: true // true for dev, false for prod...
		}))
		//.pipe(prefix({ cascade: true }))
		.pipe(gulp.dest(cfg.distPaths.less));
});
