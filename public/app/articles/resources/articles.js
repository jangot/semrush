define([

    'app',

    'common/services/apiResource'

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


    app.service('Articles', function(apiResource, $q) {
        return apiResource('request', {}, {
            setUrls: {
                method: 'GET'
            },
            query: {
                method: 'GET',
                url: 'response',
                transformResponse: function(data) {
                    console.log(data);
                    //data.forEach(function(item) {
                    //    item.score = 10;
                    //});
                    return data;
                },
                isArray: true
            }
        });

        //return {
        //    query: function() {
        //        var result = [];
        //        _.times(30, function(i) {
        //            var newItem = _.clone(item);
        //            newItem.date = new Date();
        //            newItem.date.setDate(i);
        //            result.push(newItem);
        //        });
        //        return {
        //            $promise: $q.when(result)
        //        };
        //    }
        //}
    });

});