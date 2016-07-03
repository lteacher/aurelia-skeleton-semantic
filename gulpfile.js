require('babel-core/register');
const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const mocha = require('gulp-mocha');

// Static server
gulp.task('serve', () => {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });

  gulp.watch('./src/**/*').on('change',browserSync.reload);
});

// Test
gulp.task('test', () => {
  return gulp.src('test/*',{read:false})
    .pipe(mocha());
});
