define([

    'app',

    'articles/services/articles'

], function(app){
    "use strict";

    app.controller('ArticlesList', function($scope, articles) {
        articles
            .getList()
            .then(function(result) {
                var count = 0;
                //result.forEach(function(item) {
                //    item.score = count++;
                //})
                console.log(result);
                $scope.articles = result;
            });

    });
});
