
const gulp = require('gulp');
const runSequence = require('run-sequence');
const serverFactory = require('spa-server');
const debug  = require('gulp-debug');
const deploy = require('gulp-gh-pages');
const del = require('del');
const ncp = require('ncp').ncp;


const DEPLOY_TEMP_PATH = './.deploy';
const DEMO_PATH = './demo';


gulp.task('default', function (callback) {
  callback();
});

gulp.task('start', function (callback) {
  runSequence('default', 'webserver', callback);
});

gulp.task('webserver', function () {
  serverFactory
    .create({
      path: './demo',
      serveStaticConfig: {
        index: 'index.html'
      }
    })
    .start()
  ;
});

gulp.task('demo:deploy', function (done) {
  runSequence(
    'demo:deploy:before',
    'demo:deploy:actual',
    'demo:deploy:after',
    done
  );
});

gulp.task('demo:deploy:actual', function () {
  console.log('Starting to deploy files...');
  return gulp.src(DEPLOY_TEMP_PATH + '/**/*')
    .pipe(deploy())
  ;
});

gulp.task('demo:deploy:before', function (done) {

  // Clearing temp directories and making a temp copy.
  deployClearTemp()
    .then(function () {
      makeTempCopy(done);
    })
  ;


  /**
   * Makes a temporary copy of the demos directory with symlinks resolved.
   *
   * @param {function} callback
   */
  function makeTempCopy (callback) {
    ncp(DEMO_PATH, DEPLOY_TEMP_PATH, {
      dereference: true
    }, function (error) {
      if (error) {
        return console.error(error);
      }
      console.log('Temporary copy created!');
      callback();
    });
  }

});

gulp.task('demo:deploy:after', function () {
  return deployClearTemp();
});


/**
 * Clears temp directory.
 */
function deployClearTemp () {
  return del([DEPLOY_TEMP_PATH, './.publish']);
}
