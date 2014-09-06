module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            dist: {
                src: ['dist/**/*'],
                filter: 'isFile'
            }
        },
        copy: {
            dist: {
                src: 'src/index.html',
                dest: 'dist/index.html'
            }
        },
        cssmin: {
            dist: {
                src: 'src/css/main.css',
                dest: 'dist/css/main.css'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', [
        'clean',
        'copy',
        'cssmin'
    ]);
};
