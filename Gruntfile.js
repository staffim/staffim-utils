module.exports = function(grunt) {
    "use strict";

    grunt.initConfig({
        concat: {
            js: {
                src: [
                    'src/scripts/staffimUtils.module.js',
                    'src/scripts/staffimUtils.constant.js',
                    'src/scripts/staffimUtils.listener.js',
                    'src/scripts/staffimUtils.menu.js',
                    'src/scripts/staffimUtils.interceptor.js',
                    'src/scripts/staffimUtils.page.js',
                    'src/scripts/staffimUtils.route.js',
                    'src/scripts/staffimUtils.state.js',
                    'src/scripts/staffimUtils.underscore.js',
                    'src/scripts/staffimUtils.waves.js',
                    'src/scripts/staffimUtils.uploader.js',
                    'src/scripts/staffimUtils.logger.js',
                    'src/scripts/staffimUtils.dataFormatter.js',
                    'src/scripts/staffimUtils.compile.js',
                    'src/scripts/staffimUtils.urlService.js',
                    'src/scripts/staffimUtils.urlDirective.js',
                    'src/scripts/staffimUtils.onceEventDirective.js',
                    'src/scripts/staffimUtils.backButtonDirective.js',
                    'src/scripts/staffimUtils.fileManagerService.js',
                    'src/scripts/staffimUtils.fileSizeFilter.js',
                    'src/scripts/staffimUtils.distanceFilter.js',
                    'src/scripts/staffimUtils.bootstrap.js',
                    'src/scripts/staffimUtils.analytic.js',
                    'src/scripts/staffimUtils.notify.js',
                    'src/scripts/staffimUtils.jquery.js',
                    'src/scripts/staffimUtils.afterRenderDirective.js',
                    'src/scripts/staffimUtils.moment.js',
                    'src/scripts/staffimUtils.storage.js',
                    'src/scripts/staffimUtils.deferred.js',
                    'src/scripts/staffimUtils.broadcaster.js',
                    'src/scripts/staffimUtils.lineBreaksFilter.js',
                    'src/scripts/staffimUtils.checkUpdate.js',
                    'src/scripts/staffimUtils.confirm.js'
                ],
                dest: './dist/staffim-utils.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('dist', ['concat']);
};
