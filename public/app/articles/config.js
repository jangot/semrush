define([

    'app',

    'articles/views/add/controller',
    'articles/views/list/controller',

    'articles/directive/articles/directive'

], function(app) {

    app.config(function($stateProvider) {
        $stateProvider.state(
            'body.articlesAdd',
            {
                url: '/add-link',
                view: 'articles/add',
                data: {
                    title: 'Ввод источников'
                }
            }
        );

        $stateProvider.state(
            'body.articlesList',
            {
                url: '/list',
                view: 'articles/list',
                data: {
                    title: 'Статистика по источникам'
                }
            }
        );
    });
});