var gulp = require('gulp');
var w3cjs = require('gulp-w3cjs');
var cfg = require('../config.js');

// w3cjs --------------------------------------------------------------------
gulp.task('w3cjs', function () {
    gulp.src(cfg.srcPaths.html)
        .pipe(w3cjs());
})