define([

    'app',

    'articles/services/articles'

], function(app){
    "use strict";

    app.controller('ArticlesAdd', function($scope, $state, articles) {
        $scope.url = '';
        $scope.send = function() {
            if ($scope.url) {
                articles.loadList($scope.url);
                $state.go('body.articlesList');
            } else {
                //TODO set errors
                console.warn('FORM ERROR');
            }
        }
    });
});
