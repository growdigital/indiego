// Gulp script from Favicon Generator
// https://realfavicongenerator.net/

const gulp = require('gulp');
const realFavicon = require ('gulp-real-favicon');
const fs = require('fs');

// File where the favicon markups are stored
const FAVICON_DATA_FILE = 'static/assets/pwa/faviconData.json';

// Generate icons. Takes a few seconds. Run at least once,
// then whenever RealFaviconGenerator package updates its
// package (see the check-for-favicon-update task below).
gulp.task('favicon', function(done) {
	realFavicon.generateFavicon({
		masterPicture: 'static/assets/img/favicon.svg',
		dest: 'static/assets/pwa/',
		iconsPath: '/assets/pwa/',
		design: {
			ios: {
				pictureAspect: 'noChange',
				assets: {
					ios6AndPriorIcons: false,
					ios7AndLaterIcons: false,
					precomposedIcons: false,
					declareOnlyDefaultIcon: true
				}
			},
			desktopBrowser: {},
			windows: {
				pictureAspect: 'noChange',
				backgroundColor: '#da532c',
				onConflict: 'override',
				assets: {
					windows80Ie10Tile: false,
					windows10Ie11EdgeTiles: {
						small: false,
						medium: true,
						big: false,
						rectangle: false
					}
				}
			},
			androidChrome: {
				pictureAspect: 'noChange',
				themeColor: '#ffffff',
				manifest: {
					display: 'standalone',
					orientation: 'notSet',
					onConflict: 'override',
					declared: true
				},
				assets: {
					legacyIcon: false,
					lowResolutionIcons: false
				}
			},
			safariPinnedTab: {
				pictureAspect: 'blackAndWhite',
				threshold: 50,
				themeColor: '#4b0082'
			}
		},
		settings: {
			scalingAlgorithm: 'Mitchell',
			errorOnImageTooSmall: false,
			readmeFile: false,
			htmlCodeFile: false,
			usePathAsIs: false
		},
		markupFile: FAVICON_DATA_FILE
	}, function() {
		done();
	});
});

// Check for updates on RealFaviconGenerator
gulp.task('favicon-update', function(done) {
	const currentVersion = JSON.parse(fs.readFileSync(FAVICON_DATA_FILE)).version;
	realFavicon.checkForUpdates(currentVersion, function(err) {
		if (err) {
			throw err;
		}
	});
});

