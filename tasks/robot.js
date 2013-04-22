/*jslint node: true, indent: 2, unparam: true, nomen: true */
/*
 * grunt-robot
 * https://github.com/thomastraub/grunt-robot
 *
 * Copyright (c) 2013 Thomas Traub
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks


  grunt.registerTask('robot', 'Generate HTML files from Mustache templates', function () {

    // Merge task-specific and/or target-specific options with these defaults.
    var error,
      options = this.options({
        templateRoot: 'robot'
      }),
      done = this.async(),
      path = require('path'),
      robotJsonPath,
      compiler,
      Robot;

    if (!options.templateRoot) {
      error = new Error('Missing option templateRoot');
      grunt.fail.fatal(error);
    }
    if (!grunt.file.exists(options.templateRoot)) {
      error = new Error('Cannot find the templateRoot folder in the project root');
      grunt.fail.fatal(error);
    }
    if (!grunt.file.exists(options.templateRoot, 'robot.json')) {
      error = new Error('Lacking file ' + options.templateRoot + '/robot.json');
      grunt.fail.fatal(error);
    }
    ['data', 'layouts', 'partials', 'pages'].map(function (binding) {
      if (!grunt.file.exists(options.templateRoot, 'source', binding)) {
        error = new Error('The source/' + binding + ' folder is required');
        grunt.fail.fatal(error);
      }
    });

    robotJsonPath = path.resolve(options.templateRoot);
    console.log('Start assembling template folder ' + options.templateRoot);

    Robot = require('robot');

    // Need to have a callback for calling Grunt done()
    Robot.prototype.compile = function (callback) {
      var self = this;

      this.__readSource(function () {
        console.log('Source file read complete.');
        self.__generateOutput(function (file) {
          console.log('Output file write complete.');
          if (typeof callback === 'function') {callback(); }
        });
      });
    };

    compiler = new Robot(robotJsonPath);
    compiler.compile(done);
  });

};
