define([

    'app',

    'common/services/apiResource'

], function(app) {

    function getScore(item) {
        var result = 0;
        _.forEach(item.social, function(socialItem) {
            //_.forEach()
            //socialItem
        });
        return 20;
    }

    app.service('Articles', function(apiResource, $q) {
        return apiResource('request', {}, {
            setUrls: {
                method: 'GET'
            },
            query: {
                method: 'GET',
                url: 'response',
                //transformResponse: function (data) {
                //    var result = angular.fromJson(data);
                //    result.forEach(function(item) {
                //        item.score = getScore(item);
                //    });
                //    return result;
                //},
                isArray: true
            }
        });


    });

});