define([

    'angular',
    'angularResource',
    'uiRouter',
    'angularTablesort',

    'angularAMD',

    'uiBootstrap',
    'uiBootstrapTpl'

], function(angular) {
    return angular.module('app', [
        'ui.router',  'ui.bootstrap', 'ngResource', 'tableSort'
    ]);
});