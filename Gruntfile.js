module.exports = function (grunt) {
    // 1 - Описываем все выполняемые задачи
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            build: {
                src: 'public_html/src/grid.js',
                dest: 'public_html/js/grid.min.js'
            }
        },
        htmlmin: {
        dist: {
            options: {
                removeComments: true,
                collapseWhitespace: true
            },
            files: {
                    'public_html/src/index.html': 'public_html/src/index.html'
                    //"app/index.min.html": "app/index.html"
                }
            }
        },
        watch: {
            scripts: {
                files: ['public_html/src/*.js'],
                tasks: ['uglify'],
                options: {
                    spawn: false
                }
            }
        }
    });
 
    // 2 - Загружаем нужные плагины
   // grunt.loadNpmTasks('grunt-contrib-concat');
  //  grunt.loadNpmTasks('grunt-contrib-cssmin');
     
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
 
    // 3 - Говорим grunt, что мы хотим сделать, когда напечатаем grunt в терминале.
    grunt.registerTask('default', ['uglify']);//,'htmlmin:dist'
 
};
/*
 * 
 * min: {
    files: grunt.file.expandMapping(['path/*.js', 'path2/*.js'], 'destination/', {
        rename: function(destBase, destPath) {
            return destBase+destPath.replace('.js', '.min.js');
        }
    })
}
 */