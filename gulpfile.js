'use strict';

const gulp = require('gulp');
const babel = require('gulp-babel');
const strip = require('gulp-strip-comments');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');

gulp.task('node', function() {
	return gulp.src('2d-array-rotation.js')
		.pipe(sourcemaps.init())
		.pipe(strip())
		.pipe(babel())
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('dist'));
});

gulp.task('browser', function() {
	return gulp.src('2d-array-rotation.js')
		.pipe(sourcemaps.init())
		.pipe(strip())
		.pipe(babel({
			"presets": [
				[
					"minify", {
						"keepFnName": true
					}
				]
			]
		}))
		.pipe(rename({ 'extname': '.min.js' }))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('dist'));
});

gulp.task('default', gulp.series('node', 'browser'));
