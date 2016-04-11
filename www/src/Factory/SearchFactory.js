'use strict'

app.factory('Search', function ($http, $rootScope, BetaSerie) {

    var Search = {};
    Search.searchData = [];

    Search.setSearch = function (search) {
        var promise = BetaSerie.doSearch(search);
        promise.then(function (result) {
            console.log(result);
            var sData = [];
            var shows = result.data.shows;
            for (var id in shows) {
                var show = shows[id];
                var d = {
                    id: show.id,
                    title: show.title,
                    description: show.description,
                    in_account: show.in_account,
                    image: show.images.box
                };
                console.log(d);
                sData.push(d);
            }
            console.log(sData);
            $rootScope.$broadcast('searchData', sData);
        }, function (data) {
            console.log(data);
        });
    };

    Search.getSearch = function () {
        return searchData;
    };

    return Search;

});