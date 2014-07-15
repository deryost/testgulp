var gulp = require('gulp');
var cfg = require('../config.js');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

// Javascript --------------------------------------------------------------------
gulp.task('js', function() {
	gulp.src(cfg.srcPaths.js)
		.pipe(uglify({source_map: true, camelcase: true}))
		.pipe(concat("main.js"))
		.pipe(gulp.dest(cfg.distPaths.js))
});