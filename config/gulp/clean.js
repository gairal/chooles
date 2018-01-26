const conf = require('../config.json');
const gulp = require('gulp');
const del = require('del');

gulp.task('clean', function (cb) {
  'use strict';
  return del([conf.base.build, conf.base.dist], cb);
});
