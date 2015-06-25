requirejs.config({
    baseUrl: '/app/',
    paths: {
        jquery: '../bower_components/jquery/jquery.min',
        lodash: '../bower_components/lodash/dist/lodash',

        angular: '../bower_components/angular/angular',
        angularAMD: '../bower_components/angularAMD/angularAMD',
        angularResource: '../bower_components/angular-resource/angular-resource',
        uiRouter: '../bower_components/angular-ui-router/release/angular-ui-router',

        uiBootstrap: '../bower_components/angular-bootstrap/ui-bootstrap',
        uiBootstrapTpl: '../bower_components/angular-bootstrap/ui-bootstrap-tpls',
        angularTablesort: '../bower_components/angular-tablesort/js/angular-tablesort'
    },
    shim: {
        angular: {
            exports: 'angular',
            deps: ['jquery', 'lodash']
        },
        angularTablesort: ['angular'],
        angularAMD: ['angular'],
        uiRouter: ['angular'],
        uiBootstrap: ['angular'],
        uiBootstrapTpl: ['angular'],
        angularResource: ['angular']
    },
    deps: ['bootstrap']
});