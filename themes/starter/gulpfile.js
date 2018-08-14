const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const	concat = require('gulp-concat');
const presetenv = require('postcss-preset-env');
const	del = require('del');
const	minifyCSS = require('gulp-clean-css');
const	imagemin = require('gulp-imagemin');
const	postcss = require('gulp-postcss');
const	rename = require('gulp-rename');
const	uglify = require('gulp-uglify');

// Define paths. The order is important.
const	paths = {
	css: [
    './node_modules/normalize-css/normalize.css',
    './src/01-variables.css',
    './src/02-base/css/*.css',
    './src/03-objects/**/**/*.css',
    './src/04-components/**/**/*.css',
    './src/05-utilities/**/**/*.css',
    './src/06-shame.css'
	],
	js: [
    './src/02-base/js/*.js',
    './src/03-objects/**/**/*.js',
    './src/04-components/**/**/*.js',
    './src/05-utilities/**/**/*.js',
	],
	img: [
		'./src/**/**/*.+(png|jpg|svg|ico)',
		'./src/**/**/**/*.+(png|jpg|svg|ico)'
	]
};

// CSS task
gulp.task('css', function () {
  const processors = [
    presetenv
  ];
  gulp
    .src(paths.css)
    .pipe(concat('app.css'))
    .pipe(postcss(processors))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./static/assets/'));
});

// Image minification task
// PNGs 8bitified, JPEGs progressified, SVGs optimised
gulp.task('minimage', () =>
  gulp
    .src(paths.img)
    .pipe(imagemin({ progressive: true, pngquant: true, optimizationLevel: 3 }))
    .pipe(rename({ dirname: '' }))
    .pipe(gulp.dest('./static/assets/img/'))
);

// JS uglify
gulp.task('js', () =>
  gulp
    .src(paths.js)
		.pipe(concat('app.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./static/assets/'))
);

// Clean task
gulp.task('clean', function(cb) {
	del(['./static/**/*'], cb);
});

// Watch task
gulp.task('watch', function() {
	gulp.watch(paths.css, ['css']);
	gulp.watch(paths.js, ['js']);
	gulp.watch(paths.img, ['minimage']);
});

// Browsersync
gulp.task('browser-sync', function () {
  browserSync.init({
    proxy: "http://localhost:1313/"
  });
});

// Clean task, delete generated files
gulp.task('clean', function(cb) {
	del(['./static/**/*'], cb);
});

// Default task
gulp.task('default', [
  'browser-sync',
	'css',
	'minimage',
  'js',
  'watch'
]);
