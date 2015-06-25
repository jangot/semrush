define([

    'app',

    'articles/resources/articles'

], function(app) {


    app.factory('articles', function(Articles, $q) {
        var deferred = null;
        return {
            loadList: function(urls) {
                if (!_.isArray(urls)) {
                    urls = [urls];
                }
                var params = {
                    q: JSON.stringify(urls)
                };

                deferred = $q.defer();
                Articles.setUrls(params).$promise
                    .then(function(res) {
                        load(res.id)
                    });

                function load(id) {
                    Articles
                        .query({
                            q: id,
                            d: (new Date).getTime()
                        })
                        .$promise
                        .then(function(result) {
                            deferred.resolve(result);
                        })
                        .catch(function() {
                            load(id);
                        });
                }
            },
            getList: function() {
                if (deferred) {
                    deferred.promise;
                }
                return $q.reject();
            }
        }
    })
});