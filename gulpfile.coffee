gulp = require 'gulp'
$ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'run-sequence']
});


gulp.task 'lint', ->
  gulp.src('src/*.js')
  .pipe($.eslint())
  .pipe($.eslint.format())
  .pipe($.eslint.failAfterError());


gulp.task 'concat', () ->
  gulp.src('src/*.js')
  .pipe($.concat('botkit-fb-ui.js'))
  .pipe(gulp.dest('./dist/'));


gulp.task 'watch', ->
  gulp.watch 'src/**', ['lint', 'concat']


gulp.task 'build', ['lint', 'concat']


gulp.task 'default', ['watch']