/*jslint node:true */
/*
 * grunt-robot
 * https://github.com/thomastraub/grunt-robot
 *
 * Copyright (c) 2013 Thomas Traub
 * Licensed under the MIT license.
 */

module.exports = function (grunt) {

  'use strict';

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['jshint']);
};
