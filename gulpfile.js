var gulp = require('gulp');
var webserver = require('gulp-webserver');
var sass = require('gulp-sass');
var path = require('path');
var jade = require('gulp-jade');
var errorNotifier = require('gulp-error-notifier');


// Config Sass

gulp.task('sass', function () {
  return gulp.src('./src/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    //Destino
    .pipe(gulp.dest('./dist/css/'));
});


// Conf jade

gulp.task('templates', function() {
  var YOUR_LOCALS = {};

  gulp.src('./src/jade/*.jade')
  .pipe(jade({
  locals: YOUR_LOCALS,
        pretty: true
  }))
  // destino
  .pipe(gulp.dest('./dist/'))
});


//  conf web server
gulp.task('server', function() {
  gulp.src('')
    .pipe(webserver({
      host: '192.168.12.144',
      port: 8008,
      livereload: true
    }));
});

// conf error notify


gulp.src('./src/jade/*.jade')
    .pipe(errorNotifier())
    .pipe(jade())
    .pipe(gulp.dest('./dist'));
gulp.src('./src/sass/*.scss')
    .pipe(errorNotifier.handleError(sass()))
    .pipe(gulp.dest('./dist/css'));


// wacth

gulp.task('watch', function() {
  gulp.watch('./src/jade/*.jade',['templates']);
  gulp.watch('./src/sass/*.scss', ['sass']);
})

// tareas default
gulp.task('default', ['sass','watch','server','templates']);
