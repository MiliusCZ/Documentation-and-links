// gulp
var gulp = require('gulp');

// plugins
var connect = require('gulp-connect');

var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var del = require('del');
var runSequence = require('run-sequence');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');

gulp.task('connect-dev', function () {
    connect.server({
        root: 'app/',
        port: 8888
    });
});

gulp.task('connect-dist', function () {
    connect.server({
        root: 'dist/',
        port: 9999
    });
});

gulp.task('clean', function () {
    return del([
        './dist/**/*',
        './app/js/bundled.js'
    ]);
});

gulp.task('minify-css', function () {
    var opts = { comments: true, spare: true };
    gulp.src(['./app/**/*.css', '!./app/bower_components/**'])
      .pipe(minifyCSS(opts))
      .pipe(gulp.dest('./dist/'))
});

gulp.task('minify-js', function () {
    gulp.src(['./app/**/*.js', '!./app/bower_components/**'])
      .pipe(uglify({
          // inSourceMap:
          // outSourceMap: "app.js.map"
      }))
      .pipe(gulp.dest('./dist/'))
});

gulp.task('copy-bower-components', function () {
    gulp.src('./app/bower_components/**')
      .pipe(gulp.dest('dist/bower_components'));
});

gulp.task('copy-html-files', function () {
    gulp.src('./app/**/*.html')
      .pipe(gulp.dest('dist/'));
});

gulp.task('browserify', function () {
    gulp.src(['app/js/main.js'])
    .pipe(browserify({
        insertGlobals: true,
        debug: true
    }))
    .pipe(concat('bundled.js'))
    .pipe(gulp.dest('./app/js'))
});

gulp.task('default',
  ['browserify', 'connect-dev']
);

gulp.task('build', function () {
    runSequence(
      ['clean'],
      ['minify-css', 'minify-js', 'copy-html-files', 'copy-bower-components', 'connect-dist']
    );
});