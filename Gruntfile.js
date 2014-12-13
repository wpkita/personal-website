module.exports = function(grunt) {
    grunt.initConfig({
        config: {
            src: 'src',
            dist: 'dist'
        },
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            dist: {
                src: ['<%= config.dist %>/**/*'],
                filter: 'isFile'
            }
        },
        copy: {
            dist: {
                files: [
                    {
                        src: '<%= config.src %>/favicon.ico',
                        dest: '<%= config.dist %>/favicon.ico'
                    },
                    {
                        src: '<%= config.src %>/index.html',
                        dest: '<%= config.dist %>/index.html'
                    }
                ]
            }
                
        },
        cssmin: {
            dist: {
                src: '<%= config.src %>/css/main.css',
                dest: '<%= config.dist %>/css/main.css'
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
