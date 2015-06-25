define([

    'app',

    'articles/services/articles'

], function(app){
    "use strict";

    app.controller('ArticlesList', function($scope, articles) {
        articles
            .getList()
            .then(function(result) {
                result.forEach(function(item) {
                    item.score = 0;
                    for (var social in item.social) {
                        item.score += item.social[social].likes;
                        item.score += item.social[social].shares;
                    }
                })
                console.log(result);
                $scope.articles = result;
            });

    });
});
