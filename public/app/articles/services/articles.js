define([

    'app',

    'articles/resources/articles'

], function(app) {
    var item = {
        url: 'http://test.ru/sdfsdf',
        title: 'Title test',
        author: 'Roma',
        date: new Date(),
        social: {
            fb: 123,
            gPlus: 23
        }
    };

    function getItems() {
        var result = [];
        _.times(30, function(i) {
            var newItem = _.clone(item);
            newItem.date = new Date();
            newItem.date.setDate(i);
            result.push(newItem);
        });
        return result;
    }
    app.factory('articles', function(Articles, $q, $timeout) {
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
                            $timeout(function() {
                                load(id);
                            }, 500);
                        });
                }
            },
            getList: function() {
                if (deferred) {
                    return deferred.promise;
                }
                return $q.reject();
            }
        }
    })
});