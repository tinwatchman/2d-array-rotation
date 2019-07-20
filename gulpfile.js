'use strict';

const gulp = require('gulp');
const babel = require('gulp-babel');
const strip = require('gulp-strip-comments');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('default', function() {
	return gulp.src('2d-array-rotation.js')
		.pipe(sourcemaps.init())
		.pipe(strip())
		.pipe(babel())
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('dist'))
});