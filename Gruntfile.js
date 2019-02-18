'use strict';
module.exports = function (grunt) {

  grunt.initConfig({
    watch: {
      // If any .less file changes in directory "build/less/" run the "less"-task.
      files: ["build/less/*.less"],
      tasks: ["less"]
    },
    // "less"-task configuration
    // This task will compile all less files upon saving to create both AdminLTE.css and AdminLTE.min.css
    less: {
      // Development not compressed
      development: {
        options: {
          // Whether to compress or not
          compress: false
        },
        files: {
          // compilation.css  :  source.less          
          "admin/style/vendor/AdminLTE.css": "build/less/AdminLTE.less"
        }
      },
      // Production compresses version
      production: {
        options: {
          // Whether to compress or not          
          compress: true
        },
        files: {
          // compilation.css  :  source.less
          "admin/style/vendor/AdminLTE.min.css": "build/less/AdminLTE.less"
        }
      }
    },
    cssjanus: {
      build: {
        files: {
          'admin/style/vendor/AdminLTE-rtl.css': 'admin/style/vendor/AdminLTE.css',
          'admin/style/vendor/AdminLTE-rtl.min.css': 'admin/style/vendor/AdminLTE.min.css'
        }
      }
    }
  });
  // LESS Compiler
  grunt.loadNpmTasks('grunt-contrib-less');
  // Watch File Changes
  grunt.loadNpmTasks('grunt-contrib-watch');
  // Convert CSS to RTL
  grunt.loadNpmTasks('grunt-cssjanus');

  // The default task (running "grunt" in console) is "watch"
  grunt.registerTask('default', ['watch']);
};