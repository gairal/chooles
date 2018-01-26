const gulp = require('gulp');
const runSequence = require('run-sequence');

gulp.task('release', function (cb){
  'use strict';
  runSequence('clean', ['copy:build', 'pug:build', 'js:release', 'copy:release'], cb);
});
