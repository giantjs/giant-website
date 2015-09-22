/*jshint node:true */
module.exports = function (grunt) {
    "use strict";

    var grocer = require('grocer'),
        packageNode = require('./package.json'),
        multiTasks = [].toMultiTaskCollection(),
        gruntTasks = [].toGruntTaskCollection();

    grocer.GruntProxy.create()
        .setGruntObject(grunt);

    'markdown'
        .toMultiTask({
            'default': {
                files: [{
                    expand: true,
                    cwd   : 'src',
                    src   : '**/*.md',
                    dest  : 'public',
                    ext   : '.html'
                }],

                options: {
                    template: 'src/templates/main.html',
                    contextBinder: true,
                    contextBinderMark: '@@@'
                }
            }
        })
        .setPackageName('grunt-markdown')
        .addToCollection(multiTasks);

    'copy'
        .toMultiTask({
            'default': {
                files: [{
                    expand: true,
                    cwd   : 'src',
                    src   : '**/*.css',
                    dest  : 'public'
                }]
            }
        })
        .setPackageName('grunt-contrib-copy')
        .addToCollection(multiTasks);

    'ftp-deploy'
        .toMultiTask({
            'default': {
                auth: {
                      host: 'ftp.giantjs.org',
                      port: 21,
                      authKey: 'giantjso'
                    },
                    src: 'public',
                    dest: 'www'
            }
        })
        .setPackageName('grunt-ftp-deploy')
        .addToCollection(multiTasks);

    'build'
        .toAliasTask()
        .addSubTasks('markdown:default', 'copy:default')
        .addToCollection(gruntTasks);

    'deploy'
        .toAliasTask()
        .addSubTasks('ftp-deploy:default')
        .addToCollection(gruntTasks);

    // registering tasks
    multiTasks.toGruntConfig()
        .applyConfig()
        .getAliasTasksGroupedByTarget()
        .mergeWith(multiTasks.toGruntTaskCollection())
        .mergeWith(gruntTasks)
        .applyTask();
};
