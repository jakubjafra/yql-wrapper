Package.describe({
    name: 'khrone:yql-wrapper',
    summary: 'Simple meteor package wrapper for node-yql.',
    version: '0.0.1',
    git: 'https://github.com/khronedev/yql-wrapper',
    documentation: 'README.md'
});

Npm.depends({
    'yql': '1.0.2'
});

Package.onUse(function(api){
    api.use([
        'meteor-platform@1.2.3'
    ]);

    // ~~~

    api.addFiles([
        'ygl.js'
    ], ['server']);

    api.export([
        'YQL'
    ], ['server']);
});