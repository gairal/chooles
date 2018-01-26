const conf = require('../config.json');
const gulp = require('gulp');

const rollup = require('rollup').rollup;
const nodeResolve = require('rollup-plugin-node-resolve');
const eslint = require('rollup-plugin-eslint');
const uglify = require('rollup-plugin-uglify');
const babel = require('rollup-plugin-babel');

var cache;
const babelConf = {
  presets: [
    ['env', {
      modules: false,
      targets: {
        browsers: ['last 2 versions', 'IE >= 11']
      }
    }]
  ],
  plugins: [
    'external-helpers'
  ],
  babelrc: false
};

const rollupBaseConf = {
  input: conf.base.src + conf.path.js + 'index.js',
  plugins: [
    nodeResolve()
  ],
  cache: cache
};
const rollupBaseWriteConf = {
  format: 'umd',
  name: 'Choux'
};

const rollupBuildConf = rollupBaseConf;
const rollupBuildWriteConf = Object.assign({},  rollupBaseWriteConf, {
  sourcemap: true,
  file: conf.base.build + conf.path.js + 'choux.js'
});

// release conf
const rollupReleaseConf = Object.assign({},  rollupBaseConf, {
  plugins: [
    nodeResolve(),
    babel(babelConf)
  ]
});
const rollupReleaseWriteConf = Object.assign({},  rollupBaseWriteConf, {
  sourcemap: true,
  file: conf.base.dist + conf.path.js + 'choux.js'
});

// release min conf
const rollupReleaseMinConf = Object.assign({},  rollupBaseConf, {
  plugins: [
    nodeResolve(),
    eslint(),
    babel(babelConf),
    uglify()
  ]
});
const rollupReleaseMinWriteConf = Object.assign({},  rollupBaseWriteConf, {
  file: conf.base.dist + conf.path.js + 'choux.min.js'
});

gulp.task('js:build', function() {
  'use strict';
  return rollup(rollupBuildConf).then(function (bundle) {
    cache = bundle;
    return bundle.write(rollupBuildWriteConf);
  });
});

gulp.task('js:release', function () {
  'use strict';
  rollup(rollupReleaseConf).then(function (bundle) {
    return bundle.write(rollupReleaseWriteConf);
  });
  return rollup(rollupReleaseMinConf).then(function (bundle) {
    return bundle.write(rollupReleaseMinWriteConf);
  });
});
