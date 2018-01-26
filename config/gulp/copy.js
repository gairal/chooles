const conf = require('../config.json');
const gulp = require('gulp');
const rename = require("gulp-rename");

gulp.task('copy:build', function () {
  'use strict';
  // copy the HTMLs
  return gulp.src([conf.base.src + conf.path.css + conf.files.css],
    {base: './' + conf.base.src})
    .pipe(gulp.dest(conf.base.build));
});

gulp.task('copy:release', function () {
  'use strict';
  /**
  * copy the final assets to the demo
  */
  // here we copy and rename the JS and CSS so the demo uses the min version
  gulp.src([
    conf.base.dist + conf.path.js + 'choux.min.js'
  ], {base: './' + conf.base.dist})
    .pipe(rename(function (path) {
      path.basename = path.basename.replace('.min', '');
    }))
    .pipe(gulp.dest(conf.base.demo));

  // copy the HTMLs
  return gulp.src(conf.base.build + conf.files.html)
  .pipe(gulp.dest(conf.base.demo));
});
