const gulp = require('gulp');
const runSequence = require('run-sequence');

gulp.task('build', function (cb){
  'use strict';
  return runSequence('clean', ['copy:build', 'pug:build', 'js:build'], cb);
});
