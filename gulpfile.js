var gulp = require('gulp');
var webshot = require('gulp-webshot');

// @see https://github.com/brenden/node-webshot#options
var options = {
  root: 'public/',
  dest: 'capture/',
  defaultWhiteBackground: true
}

gulp.task('default', function(){
  gulp.src('public/**/*.html')
    .pipe(webshot(options));
});
