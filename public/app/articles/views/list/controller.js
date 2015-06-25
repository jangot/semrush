define([

    'app',

    'articles/services/articles'

], function(app){
    "use strict";

    app.controller('ArticlesList', function($scope, articles) {
        articles
            .getList()
            .$promise
            .then(function(result) {
                $scope.articles = result
            });

    });
});
