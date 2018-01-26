const conf = require('../config.json');
const pkg = require('../../package.json');
const gulp = require('gulp');
const puglint = require('gulp-pug-lint');
const pug = require('gulp-pug');

function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}

gulp.task('pug:build', function() {
  'use strict';
  var myLocals = {
    'appName': pkg.name
  };
  gulp.src([conf.base.src + conf.path.demo + conf.files.pug])
    .pipe(puglint())
    .on('error', handleError);

  return gulp.src([conf.base.src + conf.path.demo + conf.files.pugindex])
    .pipe(pug({
      locals: myLocals,
      pretty: true
    }))
    .pipe(gulp.dest(conf.base.build));
});
