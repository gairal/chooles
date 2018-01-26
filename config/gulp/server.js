const conf = require('../config.json');
const gulp = require('gulp');
const runSequence = require('run-sequence');
const browserSync = require('browser-sync').create();

gulp.task('browser-sync:build', function() {
  'use strict';
  browserSync.init({
    server: {
      baseDir: conf.base.build
    },
    reloadDebounce: 2000,
    open: false,
    notify: false
  });
});

gulp.task('browser-sync:dist', function() {
  'use strict';
  browserSync.init({
    server: {
      baseDir: conf.base.dist
    },
    reloadDebounce: 2000,
    open: false,
    notify: false
  });
});

gulp.task('watch', function () {
  'use strict';
  gulp.watch(conf.base.src + conf.path.css + conf.files.css, ['copy:build', browserSync.reload]);
  gulp.watch(conf.base.src + conf.path.js + conf.files.js, ['js:build', browserSync.reload]);
  gulp.watch(conf.base.src + conf.files.pug, ['pug:build', browserSync.reload]);
});
