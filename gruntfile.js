"use strict";

module.exports = function(grunt) {
    
      // Project configuration.
      grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),   
      });

    //loads the various task configuration files 
    var configs = require('load-grunt-configs')(grunt);
    grunt.initConfig(configs);
    
      // Load the plugin that provides the "uglify" task.
      grunt.loadNpmTasks('grunt-contrib-uglify');

      // Load the plugin that provides the "watch" task.
      grunt.loadNpmTasks('grunt-contrib-watch');

      // Load the plugin that provides the "cssmin" task.
      grunt.loadNpmTasks('grunt-contrib-cssmin');

      // Load the plugin that provides the "sass" task.
      grunt.loadNpmTasks('grunt-sass');

      // Load the plugin that provides the "clean" task.
      grunt.loadNpmTasks('grunt-contrib-htmlmin');
    
      // Default task(s).
      grunt.registerTask('build', ['uglify', 'sass', 'cssmin', 'htmlmin']);
      grunt.registerTask('watchfile', ['watch']);
    };