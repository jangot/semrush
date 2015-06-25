define([

    'app'

], function(app) {

    app.directive('appArticles', function() {
        return {
            scope: {
                articles: '&data'
            },
            templateUrl: '/app/articles/directive/articles/template.html',
            link: function(scope) {
                scope.getScore = function(article, index) {
                    return index + 10//TODO calculate
                }
            }
        }
    });
});