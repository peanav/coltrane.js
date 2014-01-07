module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['src/coltrane.js', 'src/data.js', 'src/barChart.js'],
      dest: 'coltrane.js'
      }
    },
    watch: {
      scripts: {
        files: ['src/*.js'],
        tasks: ['build'],
        options: {
          nospawn: false,
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Tasks
  grunt.registerTask('default', []);
  grunt.registerTask('build', ['concat']);

};
