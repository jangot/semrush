define([

    'app',

    'common/services/apiResource'

], function(app) {

    var item = {
        url: 'http://test.ru/sdfsdf',
        title: 'Title test',
        author: 'Roma',
        data: new Date(),
        social: {
            fb: 123,
            gPlus: 23
        }
    };


    app.service('Articles', function(apiResource, $q) {
        //return apiResource('article');

        return {
            query: function() {
                var result = [];
                _.times(30, function() {
                    result.push(_.clone(item))
                });
                return {
                    $promise: $q.when(result)
                };
            }
        }
    });

});