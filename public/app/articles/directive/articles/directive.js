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
                console.log(scope.articles());
            }
        }
    });
});