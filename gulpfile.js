
const { resolve: resolvePath } = require('path');

const gulp = require('gulp');
const runSequence = require('run-sequence');
const deploy = require('gulp-gh-pages');
const del = require('del');
const { ncp } = require('ncp');


const tempDeployPath = resolvePath(`${__dirname}/.deploy`);
const publishPath = resolvePath(`${__dirname}/.publish`);
const demoPath = resolvePath(`${__dirname}/demo`);


gulp.task('default', function (callback) {
  callback();
});

gulp.task('demo:deploy', done => {
  runSequence(
    'demo:deploy:before',
    'demo:deploy:actual',
    'demo:deploy:after',
    done
  );
});

gulp.task('demo:deploy:before', done => {

  // Cleaning temp directories and making a temp copy
  deployClearTemp().then(
    () => makeTempCopy(done)
  );


  /**
   * Makes a temporary copy of the demos directory with symlinks resolved.
   *
   * @param {function} callback
   */
  function makeTempCopy (callback) {
    ncp(demoPath, tempDeployPath, {
      dereference: true
    }, error => {
      if (error) {
        return console.error(error);
      }
      console.log('Temporary copy created!');
      callback();
    });
  }

});

gulp.task('demo:deploy:actual', function () {
  console.log('Starting to deploy files...');
  return gulp.src(tempDeployPath + '/**/*')
    .pipe(deploy())
  ;
});

gulp.task('demo:deploy:after', function () {
  return deployClearTemp();
});


/**
 * Clears temp directory.
 */
function deployClearTemp () {
  return del([
    tempDeployPath,
    publishPath,
  ]);
}
