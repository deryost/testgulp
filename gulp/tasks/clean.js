var gulp = require('gulp');
var clean = require('gulp-clean');

// Clean --------------------------------------------------------------------
gulp.task('clean', ['custom'], function () {  
	return gulp.src('dist', {read: false})
		.pipe(clean());
});