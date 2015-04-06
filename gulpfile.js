
var gulp = require('gulp');
var runSequence = require('run-sequence');
var serverFactory = require('spa-server');
var deploy  = require('gulp-gh-pages');
var debug  = require('gulp-debug');


gulp.task('default', function (callback) {
  callback();
});

gulp.task('start', function (callback) {
  runSequence('default', 'webserver', callback);
});

gulp.task('webserver', function () {

  serverFactory.create({
    path: './demos',
    serveStaticConfig: {
      index: 'index.html'
    }
  }).start();

});

gulp.task('deploy-site', function () {
  return gulp.src('./demos/**/*.*')
    .pipe(debug({
      title: 'Deploy'
    }))
    .pipe(deploy({}));
});
