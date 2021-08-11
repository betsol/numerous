
const { resolve: resolvePath } = require('path');

const gulp = require('gulp');
const deploy = require('gulp-gh-pages');
const del = require('del');
const { ncp } = require('ncp');


const tempDeployPath = resolvePath(`${__dirname}/.deploy`);
const publishPath = resolvePath(`${__dirname}/.publish`);
const demoPath = resolvePath(`${__dirname}/demo`);


gulp.task('default', function (callback) {
  callback();
});

module.exports = {
  'demo:deploy': gulp.series(
    demoBeforeDeploy,
    demoDeploy,
    deployClearTemp,
  ),
};


/**
 * Clears temp directory.
 */
function deployClearTemp () {
  return del([
    tempDeployPath,
    publishPath,
  ]);
}


function demoBeforeDeploy(done) {

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

}

function demoDeploy() {

  console.log('Starting to deploy files...');

  return gulp.src(tempDeployPath + '/**/*')
    .pipe(deploy())
  ;

}
