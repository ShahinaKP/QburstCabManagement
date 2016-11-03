/**
 * Qburst Cab Management gulp gile
 */
var gulp = require('gulp'),
    inject = require("gulp-inject"), // inject versioned- concatinated - minified file to index
    uglify = require('gulp-uglify'), // minify files
    concat = require('gulp-concat'), // concat files
    rename = require('gulp-rename'), // rename files
    ngAnnotate = require('gulp-ng-annotate'), // add angularjs dependency injection annotations
    rev = require("gulp-rev"),
    del = require("del"),
    cleanCSS = require('gulp-clean-css'),
    series = require("stream-series"),
    htmlmin = require('gulp-htmlmin');

// Default tasks
gulp.task('default', ['buildcss', 'scripts', 'injectToIndex', 'htmlMinify', 'indexMinify']);

//script paths
var jsFiles = 'app/**/*.js',
    jsDest = 'app/';

//js files concatinating, minification and renaming
gulp.task('scripts', ['clean:js-build'], function() {
    return gulp.src(jsFiles)
        .pipe(concat('scripts.min.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(rev()) // revision them
        .pipe(gulp.dest(jsDest));
});

// Replace minified js files 
gulp.task('clean:js-build', function() {
    return del(['app/scripts*.min.js']);
});

//css files concatinating, minification and renaming
gulp.task('buildcss', ['clean:css-build'], function() {
    return gulp.src('assets/css/style.css')
        .pipe(cleanCSS())
        .pipe(rev()) // revision them
        .pipe(gulp.dest(jsDest));
});

// Replace minified css files 
gulp.task('clean:css-build', function() {
    return del(['app/style*.css']);
});

// Inject JS links into index file
gulp.task('injectToIndex', ['scripts'], function() {
    var target = gulp.src('nonMinifiedIndex.html');     
    return target.pipe(inject(gulp.src(['app/scripts*.min.js', 'app/style*.css'], { read: false }), { relative: true }))
        .pipe(gulp.dest('.'));
});

// Create new minified HTML file
gulp.task('htmlMinify', function() {
    return gulp.src('app/partials/*.html')
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true,
            removeEmptyAttributes: false,
            removeEmptyElements: false
        }))
        .pipe(gulp.dest('app/min_partials'));
});

// Index minify
gulp.task('indexMinify', function() {
    return gulp.src('nonMinifiedIndex.html')
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true,
            removeEmptyAttributes: false,
            removeEmptyElements: false
        }))
        .pipe(rename('index.html'))
        .pipe(gulp.dest('.'));
});
