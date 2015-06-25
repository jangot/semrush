define([

    'app',

    'articles/resources/articles'

], function(app) {

    app.factory('articles', function(Articles, $q) {
        var resource = null;
        return {
            loadList: function(urls) {
                if (!_.isArray(urls)) {
                    urls = [urls];
                }
                var params = {
                    q: JSON.stringify(urls)
                };
                resource = Articles.query(params);
            },
            getList: function() {
                if (resource) {
                    return resource;
                }
                return {
                    $promise : $q.reject('Please set url')
                };
            }
        }
    })
});