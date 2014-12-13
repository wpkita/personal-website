module.exports = function(grunt) {
    grunt.initConfig({
        config: {
            src: 'src',
            dist: 'dist'
        },
        pkg: grunt.file.readJSON('package.json'),
        aws: grunt.file.readJSON('.aws.json'),
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
        },
        s3: {
            options: {
                bucket: '<%= aws.bucket %>',
                region: '<%= aws.region %>',
                accessKeyId: '<%= aws.accessKeyId %>',
                secretAccessKey: '<%= aws.secretAccessKey %>'
            },
            build: {
                cwd: '<%= config.dist %>',
                src: '**'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-aws');

    grunt.registerTask('default', [
        'clean',
        'copy',
        'cssmin'
    ]);
};
