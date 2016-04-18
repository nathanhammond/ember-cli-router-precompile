/* jshint node: true */
'use strict';

const fs = require('fs');
const process = require('process');
const path = require('path');
const rollup = require('rollup');

const Ember = require(path.join(process.cwd(),'bower_components','ember','ember-runtime'));
// const config =

module.exports = {
  name: 'ember-cli-router-precompile',
  preBuild: function() {
    let appPath = [];
    appPath.push(this.project.root);

    // FIXME: How should I look up the actual place on disk?
    if (true) { appPath.push('tests/dummy'); }

    appPath.push(this.treePaths.app);

    appPath = path.join.apply(undefined, appPath);

    rollup.rollup({
      entry: path.join(appPath, 'router.js'),
      external: ['ember', path.join(appPath, 'config/environment')]
    }).then(function(bundle) {
      bundle.write({ format: 'cjs', dest: path.join(appPath,'router.cjs') });
    }).catch(function(error) {
      console.log(error);
    });
  }
};
