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

                options: {}
            }
        })
        .setPackageName('grunt-markdown')
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

    //'build'
    //    .toAliasTask()
    //    .addSubTasks('karma', 'concat')
    //    .addToCollection(gruntTasks);

    // registering tasks
    //
    //
    //    .mergeWith(gruntTasks)

    multiTasks.toGruntConfig()
        .applyConfig()
        .getAliasTasksGroupedByTarget()
        .mergeWith(multiTasks.toGruntTaskCollection())
        .applyTask();
};
