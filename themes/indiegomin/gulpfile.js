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
    './src/css/settings/variables.css',
    './node_modules/normalize-css/normalize.css',
    './src/css/settings/base.css',
    './src/css/settings/typography.css',
    './src/css/settings/responsive.css',
    './src/modules/objects/**/*.css',
    './src/modules/components/**/**/*.css',
    './src/modules/utilities/**/**/*.css',
    './src/css/shame.css'
	],
	js: [
    './src/js/*.js',
		'./src/modules/**/**/*.js',
		'./src/modules/**/**/**/*.js'
	],
	img: [
		'./src/modules/**/**/*.+(png|jpg|svg|ico)',
		'./src/modules/**/**/**/*.+(png|jpg|svg|ico)',
		'./src/assets/img/**/*.+(png|jpg|svg|ico)',
		'./src/assets/img/*.+(png|jpg|svg|ico)'
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
    .pipe(gulp.dest('./static/assets/css/'));
});

// Image minification task
// PNGs 8bitified, JPEGs progressified, SVGs optimised
gulp.task('minimage', () =>
  gulp
    .src(paths.img)
    .pipe(imagemin({ progressive: true, pngquant: true, optimizationLevel: 3 }))
    .pipe(rename({ dirname: '' }))
    .pipe(gulp.dest('./static/assets/img'))
);

// JS uglify
gulp.task('js', () =>
  gulp
    .src(paths.js)
		.pipe(concat('app.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./static/assets/js'))
);

// Clean task
gulp.task('clean', function(cb) {
	del(['./static/**/*'], cb);
});

// Watch task
gulp.task('watch', function() {
	gulp.watch(paths.css, ['css']);
	gulp.watch(paths.js, ['uglification']);
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
