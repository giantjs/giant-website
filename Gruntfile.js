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
        .toMultiTask(function () {
            var tocHtml = {};

            return {
                toc: {
                    files: [{
                        expand: true,
                        cwd   : 'developer-guide/src/toc',
                        src   : '*.md',
                        dest  : 'public',
                        ext   : '.html'
                    }],

                    options: {
                        template         : 'src/templates/fragment.html',
                        preCompile       : function (src) {
                            // replacing extensions
                            return src.replace(/\.md/g, '.html');
                        },
                        postCompile      : function (src, context) {
                            tocHtml[context.page] = src;
                        },
                        contextBinder    : true,
                        contextBinderMark: '@@@'
                    }
                },

                'default': {
                    files: [{
                        expand: true,
                        cwd   : 'src',
                        src   : '*.md',
                        dest  : 'public',
                        ext   : '.html'
                    }, {
                        expand: true,
                        cwd   : 'developer-guide/src',
                        src   : '*.md',
                        dest  : 'public',
                        ext   : '.html'
                    }],

                    options: {
                        template         : 'src/templates/main.html',
                        preCompile       : function (src, context) {
                            // setting current year in footer
                            context.currentYear = new Date().getFullYear();

                            // replacing extensions
                            return src.replace(/\.md/g, '.html');
                        },
                        postCompile      : function (src, context) {
                            return [tocHtml[context.page], src].join('\n');
                        },
                        contextBinder    : true,
                        contextBinderMark: '@@@',
                        markdownOptions  : {
                            gfm   : true,
                            tables: true
                        }
                    }
                }
            };
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
                }, {
                    expand: true,
                    cwd   : '.',
                    src   : 'images/*',
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
                    host   : 'ftp.giantjs.org',
                    port   : 21,
                    authKey: 'giantjso'
                },
                src : 'public',
                dest: 'www'
            }
        })
        .setPackageName('grunt-ftp-deploy')
        .addToCollection(multiTasks);

    'build'
        .toAliasTask()
        .addSubTasks('markdown:toc', 'markdown:default', 'copy:default')
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
